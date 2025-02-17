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

import _ from 'lodash';
import React from 'react';
import { decorate, computed, runInAction, observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { displayError } from '@amzn/base-ui/dist/helpers/notification';
import Dropdown from '@amzn/base-ui/dist/parts/helpers/fields/DropDown';
import Form from '@amzn/base-ui/dist/parts/helpers/fields/Form';
import Input from '@amzn/base-ui/dist/parts/helpers/fields/Input';
import TextArea from '@amzn/base-ui/dist/parts/helpers/fields/TextArea';

import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';
import { getCreateInternalPlatformForm } from '../../../models/forms/CreateInternalPlatformForm';
import SelectConfigurationCards from './SelectConfigurationCards';

i18next.use(initReactI18next);
// expected props
// - onPrevious (via props)
// - onNext (via props) a function is called with the form data
// - platformId (via props)
// - configurations (via props)
// - title (via props)
// - defaultCidr (via props)
// - clientInformationStore (via injection)
// - userStore (via injection)
class CreateInternalPlatformForm extends React.Component {
  constructor(props) {
    super(props);
    runInAction(() => {
      this.form = getCreateInternalPlatformForm({
        projectIdOptions: this.projectIdOptions,
        cidr: this.props.defaultCidr,
      });
    });
  }

  get projectIdOptions() {
    const store = this.userStore;
    return store.projectIdDropdown;
  }

  get platformId() {
    return this.props.platformId;
  }

  get configurations() {
    return this.props.configurations;
  }

  get userStore() {
    return this.props.userStore;
  }

  // eslint-disable-next-line consistent-return
  handlePrevious = () => {
    if (_.isFunction(this.props.onPrevious)) return this.props.onPrevious();
  };

  // eslint-disable-next-line consistent-return
  handleNext = async form => {
    const data = { ...form.values(), params: {}, platformId: this.platformId };

    // We pick the mutable parameters and put them in params object
    const configuration = _.find(this.configurations, ['id', data.configurationId]);
    _.forEach(_.keys(configuration.mutableParams), key => {
      if (!_.has(data, key)) return;
      data.params[key] = data[key];
      delete data[key];
    });

    try {
      await this.props.onNext(data);
    } catch (error) {
      displayError(error);
    }
  };

  render() {
    const title = this.props.title || '';
    return (
      <div className="mt2">
        <Header as="h3" textAlign="center">
          {title}
        </Header>
        {this.renderForm()}
      </div>
    );
  }

  renderForm() {
    const form = this.form;
    const askForCidr = !_.isUndefined(this.props.defaultCidr);
    const configurations = this.configurations;

    return (
      <Segment clearing className="p3 mb3">
        <Form form={form} onCancel={this.handlePrevious} onSuccess={this.handleNext}>
          {({ processing, /* onSubmit, */ onCancel }) => (
            <>
              <Input field={form.$('name')} />
              {askForCidr && <Input field={form.$('cidr')} />}
              <Dropdown field={form.$('projectId')} fluid selection />
              <SelectConfigurationCards configurations={configurations} formField={form.$('configurationId')} />
              <TextArea field={form.$('description')} />

              <Button
                floated="right"
                className="ml2"
                primary
                content={i18next.t('researchWorkspace.create', { ns: 'workspaces' })}
                disabled={processing}
                type="submit"
              />

              <Button
                floated="right"
                icon="left arrow"
                labelPosition="left"
                className="ml2"
                content={i18next.t('previous')}
                disabled={processing}
                onClick={onCancel}
              />
            </>
          )}
        </Form>
      </Segment>
    );
  }
}

// see https://medium.com/@mweststrate/mobx-4-better-simpler-faster-smaller-c1fbc08008da
decorate(CreateInternalPlatformForm, {
  form: observable,
  platformId: computed,
  configurations: computed,
  userStore: computed,
  projectIdOptions: computed,
  handlePrevious: action,
});

export default withTranslation()(inject('userStore', 'clientInformationStore')(observer(CreateInternalPlatformForm)));
