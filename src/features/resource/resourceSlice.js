import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resources: null,
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    setResources: (state, action) => {
      state.resources = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResources } = resourceSlice.actions;

export default resourceSlice.reducer;
