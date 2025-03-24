import { combineReducers } from "redux";
import LanguageReducer from "./slice/languageSlice";
import UserReducer from "./slice/UserSlice";
import MembershipReducer from "./slice/MembershipSlice";


const rootReducer=combineReducers({
Language:LanguageReducer,
User:UserReducer,
Membership:MembershipReducer
})

export default rootReducer