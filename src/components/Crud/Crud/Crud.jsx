import axios from "axios";
import React, { useState } from "react";
import "../../../../src/styles/style.css";
import RegForm from "../Registration/RegForm";
import Table from "../Table/Table";

const Crud = () => {
  const [stData, setStuData] = useState()
  const [isEdit, setIsEdit] = useState(false)
  const [id, setId] = useState()
  const [values, setValues] = useState({
    name: "",
    phone: ""
  })

  const getData = () => {
    axios.get('http://127.0.0.1:8000/stuinfo/').then((res) => {
      setStuData(res.data)
    });
  }

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/deletestu/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.status)
    .then(data => getData())
  }

  const getSingleData = (id)=>{
    setIsEdit(true)
    setId(id)
    fetch(`http://127.0.0.1:8000/stuinfo/${id}`)
    .then(res => res.json())
    .then(data => {setValues(data)})
  }

  return (
    <div className="container">
      <h1 className="main_title">Crud Project With React</h1>
      <div className="main_content">
        <div>
          <RegForm getData={getData} values={values} setValues={setValues}  isEdit ={isEdit} id ={id} setIsEdit={setIsEdit}/>
        </div>
        <div>
          <Table stData={stData} getData={getData} handleDelete={handleDelete} getSingleData={getSingleData} />
        </div>
      </div>
    </div>
  );
};

export default Crud;
