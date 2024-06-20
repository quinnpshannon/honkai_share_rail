import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        displayName: '',
        isAdmin: '',
        UID: '',
        friends: []
    },
    reducers: {
        addFriend: (state, action) => {
            state.roster.push(action.payload);
        },
        removeFriend: (state, action) => {
            state.roster.push(action.payload);
        },
        storeUser: (state, action) => {
            console.log('did we get here?')
            console.log(action.payload);
        }
    }
});

//export main reducer
export default userSlice.reducer;

export const selectUser = (state) => state.user;

export const { addFriend, removeFriend, storeUser } = userSlice.actions