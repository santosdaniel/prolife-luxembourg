import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import AppMenuLinks from './AppMenuLinks';
import { I18nextProvider } from 'react-i18next';
import FakeI18n from './../../services/fake-services/fake-i18n/FakeI18n';
import { MemoryRouter } from 'react-router-dom'

let renderResult: RenderResult | null;

beforeEach(() => {
  const tReady = false;
  renderResult = render(
    <I18nextProvider i18n={FakeI18n}>
      <AppMenuLinks 
        i18n={FakeI18n}
        t={FakeI18n.t}
        tReady={tReady}
      />
    </I18nextProvider>
    , 
    { wrapper: MemoryRouter }
);
})

test('Has home and link elements', () => {
  if(!renderResult) {
    expect(false).toBeTruthy();
    return;
  }

  const { getByText, container } = renderResult;
  const homeElement = getByText(/Home/i);
  const linksElement = getByText(/Links/i);

  expect(homeElement).toBeInTheDocument();
  expect(homeElement).not.toBeVisible();

  expect(linksElement).toBeInTheDocument();
  expect(linksElement).not.toBeVisible();

  const menuButton = container.querySelector('button[class*=menu-button]');
  expect(menuButton).toBeInTheDocument();
  if(!menuButton) {
    expect(false).toBeTruthy();
    return;
  }

  fireEvent.click(menuButton);

  expect(homeElement).toBeVisible();
  expect(linksElement).toBeVisible();

});

test('Can click in Home Button', () => {
  if(!renderResult) {
    expect(false).toBeTruthy();
    return;
  }

  const { getByText, container } = renderResult;
  const homeElement = getByText(/Home/i);

  expect(homeElement).toBeInTheDocument();
  expect(homeElement).not.toBeVisible();



  const menuButton = container.querySelector('button[class*=menu-button]');
  expect(menuButton).toBeInTheDocument();
  if(!menuButton) {
    expect(false).toBeTruthy();
    return;
  }

  fireEvent.click(menuButton);

  expect(homeElement).toBeVisible();

  fireEvent.click(homeElement);

  expect(homeElement).not.toBeVisible();
  
});


afterEach(() => {
  renderResult = null;
})