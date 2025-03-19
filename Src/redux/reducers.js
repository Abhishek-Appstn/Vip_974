import { combineReducers } from "redux";
import languageSlice from "./slice/languageSlice";

const rootReducer=combineReducers({
language:languageSlice
})

export default rootReducer