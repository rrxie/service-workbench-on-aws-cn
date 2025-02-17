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
import React from 'react';
import { decorate, runInAction, observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Header, Message } from 'semantic-ui-react';
import { displayError } from '@amzn/base-ui/dist/helpers/notification';
import Form from '@amzn/base-ui/dist/parts/helpers/fields/Form';
import Input from '@amzn/base-ui/dist/parts/helpers/fields/Input';
import TextArea from '@amzn/base-ui/dist/parts/helpers/fields/TextArea';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import { getKeyPairCreateForm } from '../../../models/forms/KeyPairCreateForm';

i18next.use(initReactI18next);
// expected props
// - onCancel (via props) a function is called with the user clicks on cancel or done
// - keyPairsStore (via injection)
class KeyPairCreateForm extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.form = getKeyPairCreateForm();
      this.keyPair = undefined;
    });
  }

  get keyPairsStore() {
    return this.props.keyPairsStore;
  }

  handleCreate = async form => {
    const data = form.values();
    try {
      const keyPair = await this.keyPairsStore.createKetPair(data);
      runInAction(() => {
        this.keyPair = keyPair;
      });
    } catch (error) {
      displayError(error);
    }
  };

  handleCancel = () => {
    this.keyPair = undefined;
    const onCancel = this.props.onCancel;

    if (onCancel) return onCancel();

    return undefined;
  };

  handleDownload = () => {
    const keyPair = this.keyPair;
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', `data:application/octet-stream,${encodeURIComponent(keyPair.privateKey)}`);
    downloadLink.setAttribute('download', `${keyPair.name}.pem`);
    downloadLink.click();
  };

  render() {
    const keyPair = this.keyPair;
    return keyPair ? this.renderPrivateKey() : this.renderForm();
  }

  renderForm() {
    const form = this.form;
    return (
      <Form form={form} onCancel={this.handleCancel} onSuccess={this.handleCreate}>
        {({ processing, /* onSubmit, */ onCancel }) => (
          <>
            <Input field={form.$('name')} className="mb3" />
            <TextArea field={form.$('desc')} />

            <Button
              floated="right"
              className="ml2"
              primary
              content={i18next.t('create', { ns: 'ssh' })}
              disabled={processing}
              type="submit"
            />
            <Button
              floated="right"
              className="ml2"
              content={i18next.t('cancel')}
              disabled={processing}
              onClick={onCancel}
            />
          </>
        )}
      </Form>
    );
  }

  renderPrivateKey() {
    return (
      <>
        <Header>{i18next.t('private', { ns: 'ssh' })}</Header>
        <Message warning>
          <Message.Header>{i18next.t('warning.header', { ns: 'ssh' })}</Message.Header>
          <p>{i18next.t('warning.subheader', { ns: 'ssh' })}</p>
        </Message>
        <div className="clearfix">
          <Button floated="right" className="ml2" content={i18next.t('done')} onClick={this.handleCancel} />
          <Button
            floated="left"
            primary
            className="mr2"
            content={i18next.t('download')}
            onClick={this.handleDownload}
          />
        </div>
      </>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(KeyPairCreateForm, {
  form: observable,
  keyPair: observable,
  keyPairsStore: computed,
  handleCreate: action,
  handleCancel: action,
  handleDownload: action,
});

export default withTranslation()(inject('keyPairsStore')(withRouter(observer(KeyPairCreateForm))));
