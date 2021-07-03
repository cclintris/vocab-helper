import { combineReducers } from 'redux'
import alphabetReducer from './alphabet'
import vocabReducer from './vocabs'

const allReducers = combineReducers({
  alphabetReducer,
  vocabReducer,
})

export default allReducers
