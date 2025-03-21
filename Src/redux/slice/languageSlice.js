import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:'language',
    initialState:{value:'english'},
    reducers:{
        setLanguage:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer