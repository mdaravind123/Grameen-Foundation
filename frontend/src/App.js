import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home";
import Login from "../src/Components/login/login";
import Users from "./Components/pages/users";
import Dashboard from "./Components/pages/dashboard";
import Datavisualization from "./Components/Dashboard/datavisualization";
import Tableview from "./Components/Dashboard/tableview";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/datavisualization"
            element={<Datavisualization />}
          ></Route>
          <Route path="/tableview" element={<Tableview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
