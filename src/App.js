import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Search from "./Search";
import Logs from "./Logs";
import AddBtn from "./AddBtn";
import AddLogModal from "./AddLogModal";


function App() {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <Search />
      <div className="container">
        <AddBtn/>
        <AddLogModal/>
        <Logs />
      </div>
    </div>
  );
}

export default App;
