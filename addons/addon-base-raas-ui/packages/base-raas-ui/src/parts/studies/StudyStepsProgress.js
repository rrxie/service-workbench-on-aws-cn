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
import { Step, Icon } from 'semantic-ui-react';
import i18next from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';

i18next.use(initReactI18next);

// expected props
// currentStep an instance of the CurrentStep model
const Component = observer(({ currentStep = {}, envTypeImmutable = false }) => {
  let activeIndex;
  const step = currentStep.step;

  switch (step) {
    case 'selectComputePlatform':
    case 'selectEnvType':
      activeIndex = 1;
      break;
    case 'selectComputeConfiguration':
    case 'selectEnvConfig':
      activeIndex = 2;
      break;
    default:
      activeIndex = 0;
  }

  return (
    <Step.Group widths={3}>
      <Step active={activeIndex === 0} disabled={activeIndex < 0}>
        <Icon name="search" color="blue" />
        <Step.Content>
          <Step.Title>{i18next.t('findAndSelectStudies.header', { ns: 'studies' })}</Step.Title>
          <Step.Description>{i18next.t('findAndSelectStudies.subheader', { ns: 'studies' })}</Step.Description>
        </Step.Content>
      </Step>
      {!envTypeImmutable && (
        <Step active={activeIndex === 1} disabled={activeIndex < 1}>
          <Icon name="server" />
          <Step.Content>
            <Step.Title>{i18next.t('selectCompute.header', { ns: 'workspaces' })}</Step.Title>
            <Step.Description>{i18next.t('selectCompute.subheader', { ns: 'workspaces' })}</Step.Description>
          </Step.Content>
        </Step>
      )}
      <Step active={activeIndex === 2} disabled={activeIndex < 2}>
        <Icon name="hdd outline" />
        <Step.Content>
          <Step.Title>{i18next.t('createWorkspace.header', { ns: 'workspaces' })}</Step.Title>
          <Step.Description>{i18next.t('createWorkspace.subheader', { ns: 'workspaces' })}</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
});

export default withTranslation()(Component);
