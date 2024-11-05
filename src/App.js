import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../src/layouts/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Main>
  );
}

export default App;
