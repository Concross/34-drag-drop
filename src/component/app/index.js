import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createAppStore from '../../lib/store';

import DashboardContainer from '../dashboard';

const store = createAppStore();

export default class App extends React.Component {
  render() {
    return (
      <section className="budget-tracker-app">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}
