import React, { Component } from 'react';
import ProductListPage from './components/ProductListPage.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import AddItem from './components/CreateItem.js';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import UpdateItem from './components/UpdateItem.js'

const history = createHistory();
class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={ProductListPage} />
              <Route path="/AddItem" component={AddItem} />
              <Route path="/UpdateItem" component={UpdateItem} />
            </div>
          </ConnectedRouter>
        );
    }
}

export default App;
