/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */

/* eslint-disable max-classes-per-file */
import _ from 'lodash';
import React from 'react';
import { decorate, computed, observable, action, runInAction } from 'mobx';
import { observer, inject, Observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Header, Tab, Label, Menu, Button, Message } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';

import { niceNumber, swallowError } from '@amzn/base-ui/dist/helpers/utils';
import { isStoreError, isStoreNew, isStoreLoading } from '@amzn/base-ui/dist/models/BaseStore';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import By from '../helpers/By';
import DataSourceStudiesList from './DataSourceStudiesList';
import DataSourceAccountCfn from './DataSourceAccountCfn';
import DataSourceAccountInfo from './DataSourceAccountInfo';
import { Operation } from '../../models/helpers/Operation';
import AccountConnectionPanel from './parts/AccountConnectionPanel';
import AccountStatusMessage from './parts/AccountStatusMessage';

i18next.use(initReactI18next);

// This component is used with the TabPane to replace the default Segment wrapper since
// we don't want to display the border.
// eslint-disable-next-line react/prefer-stateless-function
class TabPaneWrapper extends React.Component {
  render() {
    return <>{this.props.children}</>;
  }
}

// expected props
// - account (via prop)
// - dataSourceAccountsStore (via injection)
class DataSourceAccountCard extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.expanded = false;
      this.connectionPanel = {
        show: false,
        operation: Operation.create({}),
      };
    });
  }

  get account() {
    return this.props.account;
  }

  get accountsStore() {
    return this.props.dataSourceAccountsStore;
  }

  getAccountStore() {
    const accountsStore = this.accountsStore;
    const account = this.account || {};
    return accountsStore.getAccountStore(account.id);
  }

  handleCheckConnection = () => {
    this.connectionPanel.show = true;

    const account = this.account;
    const accountsStore = this.accountsStore;
    const operation = this.connectionPanel.operation;
    const doWork = async () => {
      await accountsStore.checkAccountReachability(account.id);
    };

    swallowError(operation.run(doWork));
  };

  handleDismissPanel = () => {
    this.connectionPanel.show = false;
  };

  render() {
    const account = this.account;
    const operation = this.connectionPanel.operation;
    const showPanel = this.connectionPanel.show;
    const reachable = account.reachableState;
    const hasMsg = !_.isEmpty(account.statusMessageInfo.message);
    const showMsg = !showPanel && (!reachable || (reachable && hasMsg));

    return (
      <div className="animated fadeIn">
        <Button size="mini" floated="right" color="brown" basic onClick={this.handleCheckConnection}>
          {i18next.t('accountCard.testConnection', { ns: 'data' })}
        </Button>
        {this.renderTitle(account)}
        {this.renderStatus(account)}
        {showMsg && <AccountStatusMessage account={account} />}
        {showPanel && (
          <AccountConnectionPanel account={account} operation={operation} onCancel={this.handleDismissPanel} />
        )}
        {this.renderStackMismatch(account)}
        {this.renderTabs()}
      </div>
    );
  }

  renderTabs() {
    const getMenuItemLabel = () => {
      const store = this.getAccountStore();
      const emptySpan = null;
      if (!store) return emptySpan;
      if (isStoreError(store)) return emptySpan;
      if (isStoreNew(store)) return emptySpan;
      if (isStoreLoading(store)) return emptySpan;
      return <Label>{niceNumber(store.studiesTotal)}</Label>;
    };

    const account = this.account;
    const panes = [
      {
        menuItem: (
          <Menu.Item key="studies">
            {i18next.t('studies', { ns: 'data' })} {getMenuItemLabel()}
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false} key="studies" as={TabPaneWrapper}>
            <Observer>{() => <DataSourceStudiesList account={account} />}</Observer>
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'CloudFormation',
        render: () => (
          <Tab.Pane attached={false} key="cloudformation" as={TabPaneWrapper}>
            <Observer>{() => <DataSourceAccountCfn account={account} />}</Observer>
          </Tab.Pane>
        ),
      },
      {
        menuItem: i18next.t('accountCard.accountInformation', { ns: 'data' }),
        render: () => (
          <Tab.Pane attached={false} key="accountInfo" as={TabPaneWrapper}>
            <Observer>{() => <DataSourceAccountInfo account={account} />}</Observer>
          </Tab.Pane>
        ),
      },
    ];

    return <Tab className="mt2" menu={{ secondary: true, pointing: true }} renderActiveOnly panes={panes} />;
  }

  renderTitle(account) {
    return (
      <Header as="h3" className="mt3 breakout">
        {account.name}
        <Header.Subheader>
          <span className="fs-8 color-grey mr1">
            {i18next.t('accountCard.registered', { ns: 'data' })} <TimeAgo date={account.createdAt} />{' '}
            <By uid={account.createdBy} className="mr1" />
            &mdash;
          </span>
          <span className="fs-8 color-grey mr1">
            {i18next.t('accountCard.statusChecked', { ns: 'data' })} <TimeAgo date={account.statusAt} className="mr1" />
            &mdash;
          </span>
          <span className="fs-8 color-grey">
            {i18next.t('accountCard.account', { ns: 'data' })} # {account.id}
          </span>
        </Header.Subheader>
      </Header>
    );
  }

  renderStatus(account) {
    const { state } = account;
    return (
      <Label attached="top left" size="mini" color={state.color}>
        {i18next.t(state.display.toLowerCase())}
      </Label>
    );
  }

  renderStackMismatch(account) {
    const stackOutDated = account.stackOutDated;
    const incorrectStackNameProvisioned = account.incorrectStackNameProvisioned;

    if (!stackOutDated && !incorrectStackNameProvisioned) return null;

    if (incorrectStackNameProvisioned) {
      return (
        <Message warning>
          <Message.Header>
            {i18next.t('accountCard.stackMismatch.incorrectStackName.header', { ns: 'data' })}
          </Message.Header>
          <p>
            {i18next.t('accountCard.stackMismatch.incorrectStackName.subheader', {
              ns: 'data',
              account: account.id,
              stack: account.stack,
            })}
          </p>
        </Message>
      );
    }

    return (
      <Message warning>
        <Message.Header>{i18next.t('accountCard.stackMismatch.stackOutDated.header', { ns: 'data' })}</Message.Header>
        <p>
          {i18next.t('accountCard.stackMismatch.stackOutDated.subheader', {
            ns: 'data',
            account: account.id,
            stack: account.stack,
          })}
        </p>
      </Message>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(DataSourceAccountCard, {
  accountsStore: computed,
  account: computed,
  handleCheckConnection: action,
  handleDismissPanel: action,
  connectionPanel: observable,
});

export default withTranslation()(inject('dataSourceAccountsStore')(withRouter(observer(DataSourceAccountCard))));
