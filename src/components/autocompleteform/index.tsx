import { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";

import {
  addSelectedLocation,
  setSelectedLatLng,
} from "../location/LocationSlice";

const AutocompleteForm = () => {
  const formRef = useRef<any>();
  const dispatch = useDispatch<any>();
  const [autocomplete, setAutocomplete] = useState<any>(null);

  const onLoad = (autoC: any) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    const location = {
      name: autocomplete.getPlace().formatted_address,
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    };
    dispatch(addSelectedLocation(location));
    dispatch(setSelectedLatLng(location));
    formRef.current.value = "";
  };

  return (
    <div>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <UIAutocompleteForm formRef={formRef} />
      </Autocomplete>
    </div>
  );
};


const UIAutocompleteForm = ({ formRef }: any) => {
  return (
    <TextField
      fullWidth
      id="my-text-field"
      label="Search"
      variant="outlined"
      // xs={{ m: 1, width: "25ch" }}
      inputRef={formRef}
    />
  );
};


export default AutocompleteForm;
