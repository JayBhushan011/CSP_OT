import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/homepage"
import Receiver from "./components/receiver/receiver";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path = "/" element={<Navigate to="/home" /> } />
        <Route path="/home" element = {<Homepage />} />
        <Route path="/OT" element = {<Receiver />} />

        
    </Routes>
  </BrowserRouter>
  );
}

export default App;
