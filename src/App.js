import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import Work from './pages/work';
import Nature from './pages/nature';
import Photography from './pages/photography';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work" element={<Work />} />
            <Route path="/nature" element={<Nature />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
