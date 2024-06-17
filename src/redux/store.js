import {configureStore} from '@reduxjs/toolkit'
import characterReducer from '../slices/characterSlice';

export default configureStore({
    reducer: {
        character: characterReducer
    },
});