import { createSlice } from "@reduxjs/toolkit";
import { Profile_Damu } from "../../assets/Images";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        firstname: 'Rteve',
        lastname: 'Carpenter',
        membershipType: 'Gold',
        profileImage: Profile_Damu,
        mobileNumber: '+9742217718',
        email: 'Carpenter.Steve@yoohoo.com',
        qid: '100CBA20241001',
        isloggedin:false
    },
    reducers: {
        setUserData: (state, action) => {
            return { ...state, ...action.payload };
        },
        Signout:(state,action)=>{
            return{}
        }
    }
})

export const { setUserData,Signout } = UserSlice.actions
export default UserSlice.reducer