import {configureStore} from '@reduxjs/toolkit';
import notesReducer from '../Slice/NotesSlice';
export const store = configureStore({
    reducer : notesReducer,
});