var React = require('react');
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';



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
      <Paper zDepth={1} style={{marginBottom: '20px'}}>
          <Row key={i} middle="xs"  style={{background:'transparent'}} >
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

function IdeasContainer(props) {
  return (
      <Row>
          <Col xs={12} smOffset={3} sm={6}>
              <IdeasList ideas={props.ideas}/>
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
