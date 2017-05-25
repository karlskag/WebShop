import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';

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
        <Route exact path="/" component={MainPage} />
      </Router>
    )
  }
}
