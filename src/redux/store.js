import {configureStore} from '@reduxjs/toolkit'
import characterReducer from '../slices/characterSlice';
import languageReducer from '../slices/languageSlice';

export default configureStore({
    reducer: {
        character: characterReducer,
        language: languageReducer
    },
});