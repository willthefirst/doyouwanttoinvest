var React = require('react');
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button'


function NewIdea() {
  return (
    <Row center="xs" style={{marginTop: 20}}>
      <TextField type="text" placeholder="What's your idea?"/>
      <RaisedButton label="Submit" primary={true}/>
    </Row>
  )
}

function InvestButton(props) {
  return (
    <FlatButton label="+ 10¢" secondary={true} hoverColor="none" />
  )
}

function IdeasList(props) {
  var ideas = props.ideas.map(function(idea, i) {
    return (
          <Row key={i} middle="xs">
            <Col xs={2}>
              <InvestButton />
            </Col>
            <Col xs={10}>
            <ListItem
            primaryText={idea.text}
            secondaryText={
              <div>
              <span>{idea.date}</span>
              <span> | {idea.username}</span>
              </div>
            }
            />
            <Divider />
            </Col>
          </Row>
    )
  });
  return (
    <List>
      { ideas }
    </List>
  )
}

function IdeasContainer(props) {
  return (
    <Row>
      <Col xs={12} smOffset={3} sm={6}>
        <IdeasList ideas={props.ideas}></IdeasList>
        <NewIdea></NewIdea>
      </Col>
    </Row>
  )
}

var Main = React.createClass({
  getInitialState: function() {
    return {
      ideas: [
        {
          text: "Pizza delivery by dogs",
          username: "willthefirst",
          date: "2/1/16"
        },
        {
          text: "Different types of money",
          username: "brendanternus",
          date: "3/1/16"
        },
        {
          text: "Bamboo swords",
          username: "rolliewilliams",
          date: "2/2/16"
        }
      ]
    }
  },
  render: function() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Do You Want To Invest?</h1>
        <IdeasContainer ideas={this.state.ideas} />
      </div>
    )
  }
})

module.exports = Main;
