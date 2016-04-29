var React = require('react');

import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import { createStore } from 'redux';

import { createStore } from 'redux'
var actions = require('./actions');
import investApp from './reducers'
var store = createStore(investApp);
import { updateNewIdea, addNewIdea, invest } from './actions'

console.log(store.getState())

function NewIdea(props) {
  return (
    <Row center="xs" style={{marginTop: 20}}>
      <TextField type="text" placeholder="What's your idea?" value={props.value} onChange={props.onChange}/>
      <RaisedButton label="Submit" primary={true} onClick={props.onSubmit}/>
    </Row>
  )
}

function InvestButton(props) {
  return (
    <FlatButton label="+ 10¢" secondary={true} hoverColor="none" onClick={props.onClick} />
  )
}

function IdeasList(props) {
  var ideas = props.ideas.map(function(idea, i) {
    return (
      <Paper zDepth={1} style={{marginBottom: '20px'}} key={i}>
          <Row key={i} middle="xs"  style={{background:'transparent'}} >
            <Col xs={2}>
              <InvestButton onClick={props.onInvest}/>
            </Col>
            <Col xs={10}>
            <ListItem
            primaryText={idea.text}
            secondaryText={
              <div>
                <span>{idea.date}</span>
                <span> | {idea.username}</span>
                <span style={{float:'right', color:'#6bba6d'}}>Current: {idea.amountRaised}</span>
              </div>
            }
            />
            </Col>
          </Row>
      </Paper>
    )
  });
  return (
    <List style={{backgroundColor: 'transparent'}}>
      { ideas }
    </List>
  )
}
//
// var store = createStore(ideaFactory);
//



var IdeasContainer = React.createClass({
  getInitialState: function() {
    return {
      newIdea: '',
      ideas: this.props.ideas || []
    }
  },
  updateNewIdea: function(e) {
    this.setState({
      newIdea: e.target.value,
    });
  },
  handleNewIdea: function(e) {
    var newIdea = {
      text: this.state.newIdea,
      username: "currentUser",
      date: "12/14/16",
      amountRaised: '$0'
    };
    this.setState({
      ideas: this.state.ideas.concat(newIdea),
      newIdea: ''
    })
  },
  handleInvest: function(e) {
    console.log(e.target.parent)
  },
  render: function() {
    return (
      <Row>
        <Col xs={12} smOffset={3} sm={6}>
          <IdeasList ideas={this.state.ideas} onInvest={this.handleInvest}/>
          <NewIdea
            value={this.state.newIdea}
            onChange={this.updateNewIdea}
            onSubmit={this.handleNewIdea} />
        </Col>
      </Row>
    )
  }
});

var seedData = {
  ideas: [
    {
      text: "Pizza delivery by dogs",
      username: "willthefirst",
      date: "2/1/16",
      amountRaised: '$2.70'
    },
    {
      text: "Different types of money",
      username: "brendanternus",
      date: "3/1/16",
      amountRaised: '$6.10'
    },
    {
      text: "Bamboo swords",
      username: "rolliewilliams",
      date: "2/2/16",
      amountRaised: '$9.70'
    }
  ]
}

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Do You Want To Invest?</h1>
        <IdeasContainer ideas={seedData.ideas} />
      </div>
    )
  }
})

module.exports = Main;
