import React from 'react';
import { Provider } from 'react-redux';
import Books from './appComponents/Books';
import store from '../redux/configureStore';
import Categories from './appComponents/Categiries';
import './App.css';
import Header from './appComponents/Header';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Header />
          <Switch>
              <Route exact path="/">
                  <Books />
              </Route>
              <Route path="/categories">
                  <Categories />
              </Route>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
