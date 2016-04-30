// var React = require('react');
//
// import {Grid, Row, Col} from 'react-flexbox-grid/lib';
// import List from 'material-ui/lib/lists/list';
// import ListItem from 'material-ui/lib/lists/list-item';
// import Divider from 'material-ui/lib/divider';
// import TextField from 'material-ui/lib/text-field';
// import RaisedButton from 'material-ui/lib/raised-button';
// import FlatButton from 'material-ui/lib/flat-button';
// import Paper from 'material-ui/lib/paper';
//
// import { createStore } from 'redux';
// var actions = require('./actions');
// import investApp  from './reducers';
// var store = createStore(investApp);
// import { updateNewIdea, addNewIdea, invest } from './actions'
//
//
// console.log(store.getState());
//
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// store.dispatch(addNewIdea('new_idea 1!!'));
// store.dispatch(addNewIdea('new_idea 2!!'));
// store.dispatch(invest(3));
// store.dispatch(updateNewIdea('something about to be added'));
//
// unsubscribe();
