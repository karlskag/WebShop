import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import CartPage from './CartPage';

export default class WebShop extends React.Component {

  componentWillMount() {
      document.body.style.backgroundColor = '#E9B000';
  }

  componentWillUnmount() {
      document.body.style.backgroundColor = null;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Router>
    )
  }
}
