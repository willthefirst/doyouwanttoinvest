import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NewIdea from '../components/NewIdea';
import { updateNewIdea, addNewIdea } from '../actions'

const mapStateToProps = (state) => {
  return {
    value: state.newIdea
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIdeaSubmit: function(text) {
      dispatch(addNewIdea(text));
      dispatch(updateNewIdea(''));
    },
    handleIdeaChange: function(text) {
      dispatch(updateNewIdea(text));
    }
  }
}

var NewIdeaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewIdea)

export default NewIdeaContainer
