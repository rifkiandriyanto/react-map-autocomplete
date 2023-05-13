import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "../components/location/LocationSlice";

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
  },
});
