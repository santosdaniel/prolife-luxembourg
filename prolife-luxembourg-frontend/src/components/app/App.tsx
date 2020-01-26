import React from 'react';
import MenuAppBar from '../menu-app-bar/MenuAppBar';
import LinkCardList from '../link-card-list/LinkCardList';
import LinkCardListStateFactory from '../link-card-list/LinkCardListStateFactory';

import logo from './../../logo.svg';
import './App.scss';
import { withTranslation, Trans, WithTranslation } from 'react-i18next';
import i18next from 'i18next';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component<WithTranslation> {

  render() {
    const linksFactory = new LinkCardListStateFactory();
    const newState = linksFactory.createData();

    const linksPath = "/links";

    return (
      <div className="App">
        <Router>
          <MenuAppBar
            i18n={this.props.i18n}
            tReady={this.props.tReady}
            t={this.props.t}
          />
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <h1>About</h1>
              </Route>
              <Route path={linksPath}>
                <LinkCardList links={newState.links} />
              </Route>
              <Route path="/">
                <img src={logo} className="App-logo" alt="logo" />
                <p>this is text component of test</p>
                <h1 className="App-title">
                  {this.props.t('app.title', { framework: "react-i18next" })}
                </h1>
                <Trans i18nKey='welcome.intro'>
                  <h1 className="App-title">Welcome to React</h1>
                  To get started, edit <code>src/App.js</code> and save to reload.
            </Trans>
                <button onClick={() => i18next.changeLanguage('fr')}>fr</button>
                <button onClick={() => i18next.changeLanguage('en')}>en</button>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withTranslation("translations")(App);