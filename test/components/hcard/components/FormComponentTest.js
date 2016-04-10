/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import FormComponent from 'components/hcard/components/FormComponent.js';

describe('FormComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(FormComponent, {
        formData: {
            givenName: 'Ferry',
            surname: 'Haryadi',
            email: 'cfharyadi@gmail.com',
            phone: '0468892525',
            houseName: '123',
            street: 'Test',
            suburb: 'Mocha',
            state: 'Chai',
            postcode: '2000',
            country: 'Australia',
            avatarDataUrl: ''
        }
    });
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('hcard-form');
  });
});
