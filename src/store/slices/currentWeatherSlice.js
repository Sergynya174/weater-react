import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weather: null,
  isLoading: false,
};

const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getWeather = createAsyncThunk("getWeather", async (city) => {
  return axios
    .get(`${baseUrl}weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
});

const currentWeatherSlice = createSlice({
  name: "current_weater",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWeather.fulfilled, (state, { payload }) => {
      state.weather = payload;
      state.isLoading = false;
    });
    builder.addCase(getWeather.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default currentWeatherSlice.reducer;
