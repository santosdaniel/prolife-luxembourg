import React from 'react';
import AppMenuBar from '../app-menu-bar/AppMenuBar';
import LinkCardList from '../link-card-list/LinkCardList';
import LinkCardListStateFactory from '../link-card-list/LinkCardListStateFactory';

import './App.scss';
import { withTranslation, Trans, WithTranslation } from 'react-i18next';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Welcome } from '../welcome/Welcome';
import i18next from 'i18next';
import { SupportedLanguagesFactory } from '../../models/supported-languages/SupportedLanguagesFactory';
import LinkCardListStateViewModel from '../link-card-list/LinkCardListStateViewModel';

class App extends React.Component<WithTranslation> {

  private computeState = (): LinkCardListStateViewModel => {
    const linksFactory = new LinkCardListStateFactory();
    const currentLanguageString = i18next.language;
    const supportedLanguagesFactory = new SupportedLanguagesFactory();
    const currentLanguageEnum = supportedLanguagesFactory.getLanguagesEnum(currentLanguageString);
    const newState = linksFactory.createData(currentLanguageEnum);
    return newState
  }

  render() {
    const newState = this.computeState();

    const linksPath = "/links";

    return (
      <div className="App">
        <Router>
          <AppMenuBar
            i18n={this.props.i18n}
            tReady={this.props.tReady}
            t={this.props.t}
          />
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path={linksPath}>
                <Welcome
                  i18n={this.props.i18n}
                  tReady={this.props.tReady}
                  t={this.props.t}
                />

              </Route>

              <Route path="/">
                <LinkCardList links={newState.links} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withTranslation("translations")(App);