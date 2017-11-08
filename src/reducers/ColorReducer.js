import {
  GET_NEXT_COLOR
} from '../actions/types'

const INITIAL_STATE = {
  colors: ['pink','blue', 'red', 'yellow', 'green'],
  currentColor: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case GET_NEXT_COLOR:
      return {
        ...state,
        currentColor: state.currentColor + 1 > state.colors.length - 1 ? 0 : state.currentColor + 1
      }
    default:
      return state
  }
}
