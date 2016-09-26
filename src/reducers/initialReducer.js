import {
  LOAD_USERS,
  LOAD_EVENTS
} from '../actions/types'

const initialState = {
  users: [],
  events: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
    return { ...state, users: action.payload }
    break;
    case LOAD_EVENTS:
    return { ...state, events: action.payload }
    break;
  }
  return { ...state }
}
