import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../functionality/todo'

export const store = configureStore({
 reducer: todoReducer
});