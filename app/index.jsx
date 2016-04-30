var React = require('react');
var ReactDOM = require('react-dom');
import InvestApp from './components/InvestApp';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import investApp from './reducers';

var store = createStore(investApp);

ReactDOM.render(
  <Provider store={store}>
    <InvestApp />
  </Provider>
  , document.getElementById('app'));
