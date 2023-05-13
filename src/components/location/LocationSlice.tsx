import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSelectedLocations: [],
  selectedLat: null,
  selectedLng: null,
};

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addSelectedLocation: (state, action) => {
      state.listSelectedLocations.push(action.payload);
    },
    removeSelectedLocation: (state, action) => {
      const locationIndex = action.payload;
      state.listSelectedLocations.splice(locationIndex, 1);
    },
    setSelectedLatLng: (state, action) => {
      const { lat, lng } = action.payload;
      state.selectedLat = lat;
      state.selectedLng = lng;
    },
  },
});

export const {
  addSelectedLocation,
  removeSelectedLocation,
  setSelectedLatLng,
} = locationSlice.actions;

export default locationSlice.reducer;
