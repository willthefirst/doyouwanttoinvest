import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import IdeasList from '../components/IdeasList';
import { invest } from '../actions';

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInvest: function(id) {
      dispatch(invest(id))
    }
  }
}

var IdeasListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeasList)

export default IdeasListContainer;


// var IdeasContainer = React.createClass({
//   getInitialState: function() {
//     return {
//       newIdea: '',
//       ideas: this.props.ideas || []
//     }
//   },
//   updateNewIdea: function(e) {
//     this.setState({
//       newIdea: e.target.value,
//     });
//   },
//   handleNewIdea: function(e) {
//     var newIdea = {
//       text: this.state.newIdea,
//       username: "currentUser",
//       date: "12/14/16",
//       amountRaised: '$0'
//     };
//     this.setState({
//       ideas: this.state.ideas.concat(newIdea),
//       newIdea: ''
//     })
//   },
//   handleInvest: function(e) {
//     console.log(e.target.parent)
//   },
//   render: function() {
//     return (
      // <Row>
      //   <Col xs={12} smOffset={3} sm={6}>
      //     <IdeasList ideas={this.state.ideas} onInvest={this.handleInvest}/>
      //     <NewIdea
      //       value={this.state.newIdea}
      //       onChange={this.updateNewIdea}
      //       onSubmit={this.handleNewIdea} />
      //   </Col>
      // </Row>
//     )
//   }
// });
