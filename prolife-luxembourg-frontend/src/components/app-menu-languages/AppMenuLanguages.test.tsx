import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import AppMenuLanguages from './AppMenuLanguages';
import { I18nextProvider } from 'react-i18next';
import FakeI18n from './../../services/fake-services/fake-i18n/FakeI18n';
import { MemoryRouter } from 'react-router-dom'

let renderResult: RenderResult | null;

beforeEach(() => {
  const tReady = false;
  renderResult = render(
    <I18nextProvider i18n={FakeI18n}>
      <AppMenuLanguages 
        i18n={FakeI18n}
        t={FakeI18n.t}
        tReady={tReady}
      />
    </I18nextProvider>
    , 
    { wrapper: MemoryRouter }
);
})

test('Has main flag element', () => {
  if(!renderResult) {
    expect(false).toBeTruthy();
    return;
  }

  const { getByText, container } = renderResult;
  const mainFlagElement = getByText(/Home/i);

  expect(mainFlagElement).toBeInTheDocument();
  expect(mainFlagElement).toBeVisible();


  fireEvent.click(mainFlagElement);


});



afterEach(() => {
  renderResult = null;
})