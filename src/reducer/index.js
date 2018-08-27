import { combineReducers } from "redux"
import { reducer as reduxFormReducer } from "redux-form"
import list from "./list"

export default combineReducers({
  form: reduxFormReducer,
  list
})
