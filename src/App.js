import "./App.css";
import Menu from "./component/menu/Menu";
import Sidebar from "./component/menu/Sidebar";
import Home from "./component/home/Home";
import List from "./component/list/List";
import Daftar from "./component/daftar/Daftar";
import Buku from "./component/buku/Buku";
import Admin from "./component/admin/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  return (
    <Router>
      <div className="app-header">
        <Menu />
        <Sidebar />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route
            path="/List"
            caseSensitive={false}
            element={<List setRefresh={setRefresh} isRefresh={isRefresh} />}
          />
          <Route
            path="/Daftar"
            caseSensitive={false}
            element={<Daftar setRefresh={setRefresh} />}
          />
          <Route
            path="/Buku"
            caseSensitive={false}
            element={<Buku setRefresh={setRefresh} isRefresh={isRefresh} />}
          />
          <Route
            path="/Admin"
            caseSensitive={false}
            element={<Admin setRefresh={setRefresh} isRefresh={isRefresh} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
