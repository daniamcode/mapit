import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import "../styles/Search.css";
import { loadMarker } from "../redux/actions/mapActions";
import { useDispatch } from "react-redux";

const Search = ({ panTo }) => {
  let dispatch = useDispatch();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    //this try and catch with the async await should go into the redux action; no time for now to do it
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      //   panTo({ lat, lng });
      dispatch(loadMarker(lat, lng));
    } catch (error) {
      console.log("There's an error");
    }
  };

  return (
    
      <Combobox onSelect={handleSelect}>
        <ComboboxInput className="search"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search places..."
        />
        <ComboboxPopover>
          <ComboboxList className="pac-container pac-matched">
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    
  );
};

export default Search;
