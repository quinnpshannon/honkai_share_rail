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
        team:[],
        status: 'idle'
    },
    reducers: {
        addRoster: (state, action) => {
            state.roster.push(action.payload);
        },
        removeRoster: (state, action) => {
            state.roster = state.roster.filter((chara) => chara.key !== action.payload.key);
        },
        setRoster: (state, action) => {
            state.roster = (action.payload);
        },
        addTeam: (state, action) => {
            state.team.push(action.payload);
            state.team = state.team.slice(0,4);
        },
        removeTeam: (state, action) => {
            state.team = state.team.filter((chara) => chara.key !== action.payload.key);
        },
        setTeam: (state, action) => {
            state.team = (action.payload);
        },
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
export const selectStatus = (state) => state.character.status;
export const selectTeam = (state) => state.character.team;

export const { addRoster, removeRoster, setRoster, addTeam, removeTeam, setTeam } = characterSlice.actions