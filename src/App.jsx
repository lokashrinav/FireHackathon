import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import GlobalStats from "./GlobalStats";

function App() {
  return (
    <Router basename="/FireHackathon">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/global-stats" element={<GlobalStats />} />
      </Routes>
    </Router>
  );
}

export default App;
