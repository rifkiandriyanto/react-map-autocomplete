import Map from "./components/maps";
import AutocompleteForm from "./components/autocompleteform";
import Location from "./components/location";
import "./App.css";
import { LoadScript, LoadScriptProps } from "@react-google-maps/api";
import { Container, Grid } from "@mui/material";

function App() {
  const librariez: LoadScriptProps["libraries"] = ["places"];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <LoadScript
            googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`}
            libraries={librariez}
          >
            <Container fixed sx={{ padding: "10px" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <AutocompleteForm />
                  <Location />
                </Grid>
                <Grid item xs={6}>
                  <Map />
                </Grid>
              </Grid>
            </Container>
          </LoadScript>
        </header>
      </div>
    </>
  );
}

export default App;
