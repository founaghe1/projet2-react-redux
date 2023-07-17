import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import postReducer from './post.reducer'


// ici nous mettons tous nos reducers
export default combineReducers({
    // Add your reducers here.
    userReducer,
    postReducer,
})