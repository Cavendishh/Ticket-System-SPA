import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

// Redux thunk allows to write async logic that interacts with the store
const middleware = [ReduxThunk]

// store object will be imported to App.js - it will be pased to Provider component
const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store