import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import streamsReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer, //from redux-form
  streams: streamsReducer,
});
