import React from "react";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import Widgets from "./Widgets.jsx";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
