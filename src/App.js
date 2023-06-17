import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spend from "./pages/Spend/layout/Spend";
import Funding from "./pages/Funding/layout/Funding";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className='flex'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Spend />} />
          <Route path="/funding" element={<Funding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
