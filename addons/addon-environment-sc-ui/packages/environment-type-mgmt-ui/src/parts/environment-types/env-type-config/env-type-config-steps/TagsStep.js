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
import { observer } from 'mobx-react';
import { action, decorate, observable, runInAction } from 'mobx';
import { Button, Dimmer, Header, Icon, Segment, Table } from 'semantic-ui-react';

import Form from '@amzn/base-ui/dist/parts/helpers/fields/Form';
import NameValuesEditor from '@amzn/base-ui/dist/parts/helpers/fields/NameValuesEditor';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import BaseEnvTypeConfigStep from './BaseEnvTypeConfigStep';

i18next.use(initReactI18next);

class TagsStep extends BaseEnvTypeConfigStep {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.processing = false;
      this.shouldEnableActionButtons = true;
    });
  }

  render() {
    const form = this.form;
    return (
      <Segment clearing className="mt3">
        <Dimmer active={this.processing} inverted />
        {this.renderFormFields({ form })}
        <Form form={form} onCancel={this.props.onCancel} onSuccess={this.props.onSubmit}>
          {({ processing, onCancel }) => <>{this.renderActionButtons({ processing, onCancel })}</>}
        </Form>
      </Segment>
    );
  }

  // eslint-disable-next-line no-unused-vars
  renderFormFields({ form }) {
    const tagsField = form.$('tags');
    return (
      <div className="mb3">
        <div className="ml1 mb2">{i18next.t('tag.description', { ns: 'types' })}</div>
        <NameValuesEditor
          field={tagsField}
          onEnterEditMode={this.disableActionButtons}
          onExitEditMode={this.enableActionButtons}
          emptyRenderer={() => (
            <Table.Row key="empty-row" textAlign="center">
              <Table.Cell colSpan={3}>
                <Header icon className="color-grey">
                  <Icon name="tags" />
                  {i18next.t('tag.empty', { ns: 'types' })}
                </Header>
              </Table.Cell>
            </Table.Row>
          )}
        />
      </div>
    );
  }

  renderActionButtons({ processing, onCancel }) {
    const isUpdating = this.isEditAction();
    const submitButtonTitle = isUpdating
      ? i18next.t('save')
      : this.props.wizardModel.hasNext
      ? i18next.t('next')
      : i18next.t('add');
    return (
      <div className="clearfix">
        <Button
          onClick={action(() => {
            this.processing = true;
          })}
          className="ml2 mb3"
          primary
          content={submitButtonTitle}
          disabled={processing || !this.shouldEnableActionButtons}
          type="submit"
          floated="right"
        />
        {!isUpdating && this.props.wizardModel.hasPrevious && (
          <Button
            className="ml2 mb3"
            primary
            content={i18next.t('previous')}
            disabled={processing || !this.shouldEnableActionButtons}
            floated="right"
            onClick={this.props.onPrevious}
          />
        )}
        <Button
          basic
          color="grey"
          disabled={processing || !this.shouldEnableActionButtons}
          onClick={onCancel}
          floated="left"
        >
          {i18next.t('cancel')}
        </Button>
      </div>
    );
  }

  disableActionButtons = () => {
    this.shouldEnableActionButtons = false;
  };

  enableActionButtons = () => {
    this.shouldEnableActionButtons = true;
  };
}

decorate(TagsStep, {
  disableActionButtons: action,
  enableActionButtons: action,

  processing: observable,
  shouldEnableActionButtons: observable,
});
export default withTranslation()(observer(TagsStep));
