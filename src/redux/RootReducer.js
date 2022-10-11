import { combineReducers } from "redux";
import { loginReducer, signUpReducer, boardReducer } from "./reducers";

const rootReducer = combineReducers({
    loginReducer, signUpReducer, boardReducer
});

export default rootReducer;