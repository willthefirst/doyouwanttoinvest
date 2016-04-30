import React, { PropTypes } from 'react';
import IdeasListContainer from '../containers/IdeasListContainer';
import NewIdeaContainer from '../containers/NewIdeaContainer';
import { Grid, Row, Col }  from 'react-flexbox-grid/lib';

function InvestApp(props) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Do You Want To Invest?</h1>
      <Row>
        <Col xs={12} smOffset={3} sm={6}>
          <IdeasListContainer />
          <NewIdeaContainer />
        </Col>
      </Row>
    </div>
  )
}

export default InvestApp;
