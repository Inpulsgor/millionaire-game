/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import AppButton from '../AppButton';
import appTheme from '../../../theme';

const getThemeProviderWrappingComponent = theme => ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const shallowWithTheme = (tree, theme) => {
  return shallow(tree, {
    wrappingComponent: getThemeProviderWrappingComponent(theme),
  })
    .dive()
    .dive();
};

export const mountWithTheme = (component, theme) => {
  const wrapper = mount(component, {
    wrappingComponent: getThemeProviderWrappingComponent(theme),
  });

  return wrapper;
};

it('Renders without crashing', () => {
  mountWithTheme(<AppButton />, appTheme);
});
