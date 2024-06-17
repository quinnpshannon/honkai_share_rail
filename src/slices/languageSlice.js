import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        current: '',
        reference: {}
    },
    reducers: {
        initLang: async (state, action) => {
            console.log('We got there!')
            const data = await action.payload.result
            console.log(data);
        }
    }
});

//export main reducer
export default languageSlice.reducer;

export const selectCurrent = (state) => state.language.current;
export const selectReference = (state) => state.language.reference;

export const {initLang} = languageSlice.actions