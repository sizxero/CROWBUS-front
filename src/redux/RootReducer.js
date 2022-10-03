import { combineReducers } from "redux";
import { loginReducer, signUpReducer } from "./reducers";

const rootReducer = combineReducers({
    loginReducer, signUpReducer
});

export default rootReducer;