import { createSlice } from "@reduxjs/toolkit";

const MembershipSlice=createSlice({
    name:"Membership",
    initialState:{
        points:0,
        membershipType:'',
        membershipName:'',
        pointexpiryDate:''

    },
    reducers:{
        setMembership: (state, action) => {
            return { ...state, ...action.payload };
        }
       
    }
})
export const {setMembership}=MembershipSlice.actions
export default MembershipSlice.reducer