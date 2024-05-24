import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from "../features/resource/resourceSlice";

export const store = configureStore({
  reducer: {
    resource: resourcesReducer,
  },
});
