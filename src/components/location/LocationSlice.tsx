import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  listSelectedLocations: [],
  selectedLat: null,
  selectedLng: null,
};


export const addSelectedLocation = createAsyncThunk(
  "locationsSlice/addSelectedLocation",
  async (location: any, { dispatch }) => {
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore
    dispatch(setSelectedLatLng(location.lat, location.lng));
    return location;
  }
);

export const removeSelectedLocation = createAsyncThunk(
  "locationsSlice/removeSelectedLocation",
  async (locationIndex, { getState }) => {
    const state: any = getState();
    const updateSelectedLocation = state.locations.listSelectedLocations.filter(
      (_: any, index: void) => index !== locationIndex
    );
    return updateSelectedLocation;
  }
);

export const locationsSlice = createSlice({
  name: "locationsSlice",
  initialState,
  reducers: {
    setSelectedLatLng: (state, action) => {
      const { lat, lng } = action.payload;
      state.selectedLat = lat;
      state.selectedLng = lng;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSelectedLocation.fulfilled, (state : any, action) => {
        state.listSelectedLocations.push(action.payload);
      })
      .addCase(removeSelectedLocation.fulfilled, (state, action) => {
        state.listSelectedLocations = action.payload;
        const getLastArray = action.payload.at(-1);

        if (getLastArray === undefined) {
          state.selectedLat = null;
          state.selectedLng = null;
        } else {
          const { lat, lng } = getLastArray;
          state.selectedLat = lat;
          state.selectedLng = lng;
        }
      });
  },
});

export const { setSelectedLatLng } = locationsSlice.actions;

export default locationsSlice.reducer;
