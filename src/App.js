import React from "react";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Clock from 'react-digital-clock';
 

function App() {
  const [full, setfull] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  
  const inputvalue = (e) => {
 
    const { value, name } = e.target;

    setfull((preValue) => {

      return {
        ...preValue,
        [name]: value,
  }

 
    });
  };

  

  function submitValue(e) {
    e.preventDefault();

  }

  return (
    <>
      <strong><b><Clock /></b> </strong>
      <div className="container">
      <h1 style={{color:'white'}}>
        hello gyes {full.fname} {full.lname}  
      </h1>
     
      <p style={{color:'white'}}>{full.email}</p>
      <p style={{color:'white'}}>   {full.phone} </p>
      <form onSubmit={submitValue}>
          <input
            className="input"
          type="text"
          name="fname"
          placeholder="enter name "
          value={full.fname}
          onChange={inputvalue}
        />
        <br />
          <input
            className="input"
          type="text"
          name="lname"
          placeholder="enter last name"
          // onChange={inputvalue2}
          onChange={inputvalue}
          value={full.lname}
        />
        <br />
          <input
            className="input"
          type="text"
          name="email"
          placeholder="enter email"
          onChange={inputvalue}
          value={full.email}
        />
        <br />
        <input className="input"
          type="text"
          name="phone"
          placeholder="enter phone"
          onChange={inputvalue}
          value={full.phone}
        />
        <br />
        <button  className=" btn aline-item-center btn-success " onClick={submitValue}>submit</button>
        </form>
        </div>
    </>
  );
}

export default App;
