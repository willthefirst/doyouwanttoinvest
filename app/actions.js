// http://redux.js.org/docs/basics/Actions.html

// Actions types
export const UPDATE_NEW_IDEA = "UPDATE_NEW_IDEA"
export const ADD_NEW_IDEA = 'ADD_NEW_IDEA';
export const INVEST = 'INVEST'

export function updateNewIdea(text) {
  return {
    type: UPDATE_NEW_IDEA,
    text: text
  }
}

export function addNewIdea(text) {
  return {
    type: ADD_NEW_IDEA,
    idea: {
      text: text
    }
  }
}

export function invest(id) {
  return {
    type: INVEST,
    id: id
  }
}
