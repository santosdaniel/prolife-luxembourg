import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { withTranslation, Trans, WithTranslation } from 'react-i18next';
import i18next from 'i18next';

class App extends React.Component<WithTranslation> {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>this is text component of test</p>
          <h1 className="App-title">
                { this.props.t('welcome.title', { framework: "react-i18next" }) }
            </h1>
          <Trans i18nKey='welcome.intro'>
          <h1 className="App-title">Welcome to React</h1>
                To get started, edit <code>src/App.js</code> and save to reload.
            </Trans>
            <button onClick={() => i18next.changeLanguage('de')}>de</button>
                <button onClick={() => i18next.changeLanguage('en')}>en</button>
        </header>
      </div>
    );
  }
}

export default withTranslation("translations")(App);