import { combineReducers } from 'redux'

// Reducers
import user from './user'
import event from './event'
import ticket from './ticket'
import comments from './comment'
import singleEvent from './singleEvent'
import singleTicket from './singleTicket'
import risk from './risk'
// Root reducer
export default combineReducers({
  user,
  event,
  ticket,
  comments,
  singleEvent,
  singleTicket,
  risk
})
