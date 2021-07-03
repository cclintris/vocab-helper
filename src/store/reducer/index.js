import { combineReducers } from 'redux'
import alphabetReducer from './alphabet'

const allReducers = combineReducers({
  alphabetReducer,
})

export default allReducers
