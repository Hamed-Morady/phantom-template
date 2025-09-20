import ReactDOM from "react-dom/client";
import Home from "./new-templet/Home";
import BoxInfo from "./new-templet/BoxInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generic.html" element={<BoxInfo />} />
      </Routes>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
