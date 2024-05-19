import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage";
import "./styles/styles.scss";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Landingpage />
      <Homepage />
      <Dashboard />
    </div>
  );
}

export default App;
