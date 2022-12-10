import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ColumnModule from "../components/columnmodule";
import { TableModule } from "../components/tablemodule";
import { TableView } from "../components/viewmodule";
import { useNavigate } from "react-router-dom";
import "../assets/css/column.css"

export const App = () => {
  
  let navigate = useNavigate();
  
  function reDirect1() {
    navigate("/table ");
  }

  function reDirect2() {
    navigate("/view");
  }
  function reDirect3() {
    navigate("/");
  }
  return (
    <div className="container-fluid d-flex align-item-center  ">

<div>
          <nav class="navbar navbar-expand-sm bg-dark m  p-4 ">
            <div >
              <ul class="navbar-nav menu">
                <div>
                  {" "}
                  <li class="nav-item active ">
                    <a class="nav-link active  text-light " onClick={reDirect3}>
                      <h3>Column</h3>
                    </a>
                  </li>
                </div>
                <div>
                  <li class="nav-item">
                    <a class="nav-link  text-light" onClick={reDirect1}>
                      <h3>Table</h3>
                    </a>
                  </li>
                </div>
                <div>
                  {" "}
                  <li class="nav-item">
                    <a class="nav-link  text-light" onClick={reDirect2}>
                      <h3>Table View</h3>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>






     <div>
      <Routes>
        <Route path="/" element={<ColumnModule/>} />
        <Route path="table" element={<TableModule />} />
        <Route path="view" element={<TableView/>} />
      </Routes>
      </div>
          </div>
  );
};
