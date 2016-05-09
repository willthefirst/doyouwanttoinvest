import React, { PropTypes } from 'react'
import List from 'material-ui/lib/lists/list';
import Idea from './Idea'

function IdeasList(props) {
  return (
    <List style={{backgroundColor: 'transparent'}}>
      {
        props.ideas.map(function(idea, i) {
          return <Idea key={i} data={idea} onInvest={() => props.onInvest(idea.id)}/>
        })
      }
    </List>
  )
}

IdeasList.propTypes = {
  ideas: PropTypes.array.isRequired,
  onInvest: PropTypes.func.isRequired
}

export default IdeasList;
