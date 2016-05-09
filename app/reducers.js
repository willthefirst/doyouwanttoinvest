// Minimal representatoin of our state
import { addNewIdea } from './actions'
import { combineReducers } from 'redux'

var idCounter = 0;

const initialState = {
  newIdea: '',
  ideas: [
    {
      text: "Pizza delivery by dogs",
      username: "willthefirst",
      date: "2/1/16",
      amountRaised: 2,
      id: idCounter++
    },
    {
      text: "Different types of money",
      username: "brendanternus",
      date: "3/1/16",
      amountRaised: 6,
      id: idCounter++,
    },
    {
      text: "Bamboo swords",
      username: "rolliewilliams",
      date: "2/2/16",
      amountRaised: 9,
      id: idCounter++
    }
  ]
}

function ideas(ideas = initialState.ideas, action) {
  switch (action.type) {
    case 'ADD_NEW_IDEA':
      return ideas.concat({
            text: action.text,
            username: "new_user",
            date: "new_date",
            amountRaised: 0,
            id: idCounter++
        })
    case 'INVEST':
      return ideas.map(function(idea) {
        if (idea.id === action.id) {
          idea.amountRaised += 1;
        }
        return idea;
      })
    default:
      return ideas
  }
}

function newIdea(newIdea = initialState.newIdea, action) {
  switch (action.type) {
    case 'UPDATE_NEW_IDEA':
      return action.text
    default:
      return newIdea
  }
}

const investApp = combineReducers({
  newIdea,
  ideas
});

export default investApp;
