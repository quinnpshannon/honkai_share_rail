import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const warpPass = 'https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/hsr/';

export const getCharacters = createAsyncThunk('character/getCharacters', async () => {
    const response = await fetch(warpPass + 'honker_characters.json');
    const data = await response.json();
    return await data;
})

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        roster: [],
        fullList: [],
        status: 'idle'
    },
    reducers: {
        addRoster: (state, action) => {
            console.log(action.payload.key)
            state.roster.push(action.payload);
            console.log(state.roster)
        },
        removeRoster: (state, action) => {
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCharacters.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                const newList = [];
                for (const [key, value] of Object.entries(action.payload)) {
                    const newCharacter = { key: key, value: value };
                    newList.push(newCharacter);
                }
                state.fullList = newList;
                state.status = 'idle'
            })
    }
});

//export main reducer
export default characterSlice.reducer;

export const selectRoster = (state) => state.character.roster;
export const selectFullList = (state) => state.character.fullList;

export const { addRoster, removeRoster, initFullList } = characterSlice.actions