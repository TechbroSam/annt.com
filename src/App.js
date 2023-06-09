import Home from "./components/Home";
import Anntapps from "./components/Anntapps";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route exact path="/anntapps" element={<Anntapps />} />
      </Routes>
    </div>
  );
}

export default App;
