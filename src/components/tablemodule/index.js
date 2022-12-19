import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const TableModule = () => {
  // getting value from redux by useselector
  //sending value by dispatch to redux
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.tableData);

  const [editOption, setEditOption] = useState(false);
  
  //name
  const [name, setName] = useState("");
  //   //date
  const [date, setDate] = useState("");
  //   //age
  const [age, setAge] = useState("");
  
  const [indexUpdate, setIndexUpdate] = useState(0);

  let navigate = useNavigate();

  function onEdit(index, dat) {
    setEditOption(true);

    setName(dat.name);
    setDate(dat.date);
    setAge(dat.age);

    setIndexUpdate(index);
  }
  function reDirect2() {
    navigate("/view");
  }
  
  const onSave = () => {
    let updatedValue = [...storeData];
    if (editOption) {
      updatedValue[indexUpdate] = {
        name: name,
      date: date,
      age: age,
      };

      dispatch({ type: "edit", payload: updatedValue });
      console.log(updatedValue, "edit");
    } else {
      updatedValue.push({
        name: name,
      date: date,
      age: age,
      });
      console.log(updatedValue, "save");
    }
    setEditOption(false);

    dispatch({ type: "table", payload: updatedValue });
    console.log(updatedValue, "save dispatch");
    setEditOption(false)
  };

  const onDelete = (index) => {
    let updatedValue = [...storeData];
    updatedValue.splice(index, 1);
    dispatch({ type: "delete", payload: updatedValue });
  };
  return (
    <div>
     
      <div className="container p-5">
        <h1 className="text-center">Table Module</h1>
        <div className="float-end">
          {" "}
          <button className="bg-dark text-light" onClick={reDirect2}>
            View Table
          </button>
        </div>
        <table className="table table-border text-center    w-100">
          <tr className="bg-dark text-light">
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Age</th>
          
            <th>Updation</th>
            <th>Remove</th>
          </tr>
          {console.log(storeData, "tabledatav")}

          {storeData.map((dat, index) => {
            return (
              <tbody>
                <tr>
                  <td key={index} index={index}>
                    {dat.name}
                  </td>

                  <td>{dat.date}</td>
                  <td>{dat.age}</td>
     
                  <td>
                    <button onClick={() => onEdit(index, dat)}>edit</button>
                  </td>
                  <td>
                    {" "}
                    <button onClick={() => onDelete(index, dat)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div>
      
        <div>
          <div className="container text-center ">
            <h1 className="text-center">{editOption ? "Edit Module" : "Add Module"}
</h1>
            <table className="table container  text-light w-75">
              <thead className="bg-dark text-light">
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Age</th>
              
                  <th>Update</th>
                 
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
                    <input
                      name="date"
                      value={date}
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      name="age"
                      value={age}
                      placeholder="age"
                      onChange={(e) => setAge(e.target.value)}
                      type="number"
                    />
                  </td>
                

                  <td>
                    {" "}
                    <button onClick={() => onSave()}>
          {editOption ? "Update" : "Add"}
        </button>


                  </td>
                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
      </div>
    </div>
  );
};