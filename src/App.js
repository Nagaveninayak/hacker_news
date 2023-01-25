import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import CommentPage from "./Components/CommentPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/comments/:objectID" element={<CommentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
