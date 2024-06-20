import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const warpPass = 'https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/hsr/';

export const getLanguage = createAsyncThunk('character/getLanguage', async () => {
    const response = await fetch(warpPass + 'hsr.json');
    const data = await response.json();
    return await data;
})
export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        current: 'en',
        reference: {},
    },
    reducers: {
        setCurrent: (state, action) => {
                state.current=action.payload;
            }
    },
    extraReducers: builder => {
        builder
            .addCase(getLanguage.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getLanguage.fulfilled, (state, action) => {
                state.reference = action.payload;
                state.status = 'idle'
            })
    }
});

//export main reducer
export default languageSlice.reducer;

export const selectCurrent = (state) => state.language.current;
export const selectReference = (state) => state.language.reference;
export const selectLangStatus = (state) => state.language.status;

export const pathRef = {
    'Knight': "Preservation",
    'Rogue': "Hunt",
    'Mage': "Erudition",
    'Warlock': "Nihility",
    'Warrior': "Destruction",
    'Shaman': "Harmony",
    'Priest': "Abundance"
};

export const { setCurrent } = languageSlice.actions