import { Container, Grid } from "@mui/material";
import { LoadScript, LoadScriptProps } from "@react-google-maps/api";

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
                Location Selected
              </Grid>
            </Container>
          </LoadScript>
        </header>
      </div>
    </>
  );
}

export default App;
