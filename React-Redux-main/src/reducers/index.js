import { combineReducers } from "redux";
import user from "./user";
import counter from "./counter";

const reducer = combineReducers({
    counter, user
})

export default reducer;