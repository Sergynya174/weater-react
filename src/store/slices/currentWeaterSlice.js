import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weater: {},
  isLoading: false,
};

export const currentWeaterSlice = createSlice({
  name: "current_weater",
  initialState,
  reducers: {
    fetchCurrentWeater(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action) {
      state.weater = action.payload;
      state.isLoading = false;
    },
  },
});
