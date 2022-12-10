import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/css/table.css"
import "../../assets/css/column.css"

export default function ColumnModule() {
  //sending value by dispatch to redux
  const dispatch = useDispatch();

  const [select, setSelect] = useState(false);
  //name
  const [name, setName] = useState("");
  //date
  const [date, setDate] = useState("");
  //age
  const [age, setAge] = useState("");


  function onAdd(e) {
    e.preventDefault();
    let updatedValue = [...storeData];
    if (!name) {
      alert("enter the name");
    } else if (!date) {
      alert("enter the date");
    } else if (!age) {
      alert("enter the age");
    } else {
      updatedValue.push({
        name: name,
        date: date,
        age: age,
        
      });
      navigate("/table ");
      dispatch({ type: "store", payload: updatedValue });
      setSelect(false);
    }
  }
  // getting value from redux by useselector
  const storeData = useSelector((store) => store.tableData);
  console.log(storeData, "tabledata");

  let navigate = useNavigate();


  return (
    <div clas="container border p-5   ">
      
      <div className="overall">
        
        <div>
          <div className="container column text-center  ">
            <h1>Column Module</h1>
            <table className="table container w-75">
              <thead className="bg-dark text-light text-light">
                <tr>
                  <th>Name</th>
                  <th>Details</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      name="name"
                      placeholder="name"
                      value={name}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <div class="dropdown">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle bg-light text-dark"
                        data-bs-toggle="dropdown"
                      >
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Date Of Birth :
                            <input
                              name="date"
                              value={date}
                              type="date"
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Age :
                            <input
                              name="age"
                              value={age}
                              placeholder="age"
                              onChange={(e) => setAge(e.target.value)}
                              type="number"
                            />
                          </a>
                        </li>
                        
                        
              
                      </ul>
                    </div>
                  </td>
                  <td>
                    <button className=" border-secondary " onClick={onAdd}>submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>
  );
}
