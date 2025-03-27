import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:'language',
    initialState:{value:'English'},
    reducers:{
        setLanguage:(state,action)=>{
            state.value=action.payload
        },
        languageSignout:(state)=>{
            state.value=null
        }
    }
})
export const { setLanguage,languageSignout } = languageSlice.actions;
export default languageSlice.reducer