import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/homePage";
import MovieDescription from "./Components/movieDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:id" element={< MovieDescription />} />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;