import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import ListItem from 'material-ui/lib/lists/list-item';
import FlatButton from 'material-ui/lib/flat-button';

function InvestButton(props) {
  return (
    <FlatButton label="+ 10¢" secondary={true} hoverColor="none" onClick={props.onClick} />
  )
}

function Idea(props) {
  return (
    <Paper zDepth={1} style={{marginBottom: '20px'}}>
        <Row middle="xs"  style={{background:'transparent'}} >
          <Col xs={2}>
            <InvestButton onClick={props.onInvest}/>
          </Col>
          <Col xs={10}>
          <ListItem
          primaryText={props.data.text}
          secondaryText={
            <div>
              <span>{props.data.date}</span>
              <span> | {props.data.username}</span>
              <span style={{float:'right', color:'#6bba6d'}}>Current: {props.data.amountRaised}</span>
            </div>
          }
          />
          </Col>
        </Row>
    </Paper>
  )
}

Idea.propTypes = {
  data: PropTypes.object.isRequired,
  onInvest: PropTypes.func.isRequired
}

export default Idea;
