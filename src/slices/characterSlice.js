import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        roster: [],
        fullList: []
    },
    reducers: {
        initFullList: async (state, action) => {
            console.log('We got there!')
            // const data = await action.payload.result
        },
        addRoster: (state, action) => {
            state.roster.push(action.payload);
        },
        removeRoster: (state, action) => {
        }
    }
});

//export main reducer
export default characterSlice.reducer;

export const selectRoster = (state) => state.character.roster;
export const selectFullList = (state) => state.character.fullList;

export const {addRoster, removeRoster, initFullList} = characterSlice.actions