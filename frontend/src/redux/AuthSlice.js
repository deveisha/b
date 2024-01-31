import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{
     user:null,
     loading:false,
     error:null
    },
    reducers:{
        signupRequest:(state)=>{
            state.loading=true
        },
        signupSuccess:(state,action)=>{
         state.loading=false
         state.user=action.payload
        },
        signupFailure:(state,action)=>{
          state.loading=false
          state.error = action.payload
        },

    }
})

export const {signupRequest,signupSuccess,signupFailure}=authSlice.actions
export default authSlice.reducer