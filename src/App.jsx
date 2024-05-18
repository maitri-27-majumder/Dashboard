import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <Landingpage />
      <Dashboard />
    </div>
  );
}

export default App;
