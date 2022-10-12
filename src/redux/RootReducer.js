import { combineReducers } from "redux";
import { loginReducer, signUpReducer, boardReducer, reservationReducer } from "./reducers";

const rootReducer = combineReducers({
    loginReducer, signUpReducer, boardReducer, reservationReducer
});

export default rootReducer;