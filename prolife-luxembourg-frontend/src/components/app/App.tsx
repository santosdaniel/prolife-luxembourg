import React from 'react';
import AppMenuBar from '../app-menu-bar/AppMenuBar';
import LinkCardList from '../link-card-list/LinkCardList';
import LinkCardListStateFactory from '../link-card-list/LinkCardListStateFactory';

import logo from './../../logo.svg';
import './App.scss';
import { withTranslation, Trans, WithTranslation } from 'react-i18next';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Welcome } from '../welcome/Welcome';

class App extends React.Component<WithTranslation> {

  render() {
    const linksFactory = new LinkCardListStateFactory();
    const newState = linksFactory.createData();

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
                <LinkCardList links={newState.links} />
              </Route>
              <Route path="/">

                <Welcome
                  i18n={this.props.i18n}
                  tReady={this.props.tReady}
                  t={this.props.t}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withTranslation("translations")(App);