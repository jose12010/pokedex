import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: "",
    reducers: {
        setUserGlobal: (state, action) => action.payload
    }
    
})

export const {setUserGlobal} = userSlice.actions
export default userSlice.reducer