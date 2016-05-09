import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

function NewIdea({value, handleIdeaChange, handleIdeaSubmit}) {
  var input;
  return (
    <Row center="xs" style={{marginTop: 20}}>
      <TextField type="text" placeholder="What's your idea?"
        value={value}
        onChange={(e) => {handleIdeaChange(e.target.value)}}
      />
      <RaisedButton label="Submit" primary={true}
      onClick={() => {
        handleIdeaSubmit(value);
      }
      }/>
    </Row>
  )
}

NewIdea.propTypes = {
  handleIdeaSubmit: PropTypes.func.isRequired,
  handleIdeaChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default NewIdea;
