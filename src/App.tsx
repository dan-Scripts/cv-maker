import { useState } from "react";
import "./css/App.css";
import Sidebar from "./components/SideBar";

function App() {
  const [currentPage, setCurrentPage] = useState("content");
  return (
    <div className="app">
      <div className="edit-side">
        <Sidebar goToPage={setCurrentPage} page={currentPage} />
      </div>
    </div>
  );
}

export default App;
