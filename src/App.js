import "./App.css";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<TopBar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
