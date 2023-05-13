# React Map Autocomplete

This is a React application that utilizes Redux, Google Maps Autocomplete, and Material-UI to provide a map-based autocomplete feature.

## Demo

Check out the live demo of the application: [Demo Website](https://main--silver-pasca-a36fe6.netlify.app/)

Please note that the demo website may have certain limitations due to the usage of a free API key for Google Maps.

## Features

- Map-based autocomplete using Google Maps Autocomplete API
- Redux for state management
- Material-UI for the UI components

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rifkiandriyanto/react-map-autocomplete.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-map-autocomplete
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173/` to see the application running.

## Usage

1. Enter a location in the search field.
2. The application will suggest locations based on the input using Google Maps Autocomplete.
3. Select a suggested location from the dropdown to add it to the list of selected locations.
4. The selected locations will be displayed below the search field.
5. Click on a selected location to set it as the currently selected location. The selected location will be highlighted.
6. To remove a selected location, click on the 'x' button next to it.

## Dependencies

The main dependencies used in this project are:

- React
- Redux
- React Redux
- @react-google-maps/api
- Material-UI

Please refer to the `package.json` file for the complete list of dependencies.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
