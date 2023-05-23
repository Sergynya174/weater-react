import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import currentWeatherSlice from "./slices/currentWeatherSlice";

const rootReducer = combineReducers({ currentWeatherSlice });

export const store = configureStore({ reducer: rootReducer });
