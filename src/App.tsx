//Package Imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

//Component Imports
import SplashScreen from "./modules/splashscreen/splashScreen";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
