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
import { shallow } from 'enzyme';
import CreateAwsAccount from '../CreateAwsAccount';

jest.mock('react-i18next', () => ({
  withTranslation: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

jest.mock('react-i18next', () => ({
  withTranslation: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

const usersStore = {
  asDropDownOptions: () => [
    {
      key: 'userABC',
      value: 'userABC',
      text: 'Dr. John Doe',
    },
  ],
};

const awsAccountsStore = {
  createAwsAccount: jest.fn(),
  dropdownOptions: [
    {
      key: '1',
      value: '123',
      text: 'Index 123',
    },
  ],
};

describe('CreateAwsAccount', () => {
  let component = null;
  let wrapper = null;

  beforeEach(() => {
    // Render CreateAwsAccount component
    wrapper = shallow(
      <CreateAwsAccount.WrappedComponent usersStore={usersStore} awsAccountsStore={awsAccountsStore} />,
    );

    // Get instance of the component
    component = wrapper.instance();

    // Mock goto function
    component.goto = jest.fn();
    awsAccountsStore.createAwsAccount = jest.fn();
  });

  it('should create an AWS account if all information is provided', async () => {
    // Set all fields to valid values
    component.awsAccount = {
      accountName: 'MyResearchProjectAccount',
      accountEmail: 'user@example.com',
      masterRoleArn: 'arn:aws:iam::111111111111:role/MyRole',
      externalId: '123',
      description: 'This is my research project account',
    };

    // Submit form
    await component.handleSubmit();

    // Verify account gets created
    expect(awsAccountsStore.createAwsAccount).toHaveBeenCalledWith(component.awsAccount);
    // And user gets redirected to the accounts page
    expect(component.goto).toHaveBeenCalledWith('/accounts');
  });

  it('should not create an account if required fields are not provided', async () => {
    // Set invalid values (i.e. user leaves the form empty)
    component.awsAccount = {};

    // Submit form
    await component.handleSubmit();

    // Should not create account and errors should be displayed
    expect(awsAccountsStore.createAwsAccount).not.toHaveBeenCalled();

    // Verify errors are set
    expect(component.validationErrors.errors).toBeDefined();
    const fieldsWithError = Object.keys(component.validationErrors.errors);
    expect(fieldsWithError).toEqual(
      expect.arrayContaining(['accountName', 'accountEmail', 'masterRoleArn', 'externalId', 'description']),
    );
  });
});
