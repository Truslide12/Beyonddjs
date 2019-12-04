import React from "react";
import { Button } from 'react-bootstrap';

// Update this for each differnt role - we probably need different forms for the main registration then change the input values for each role
const Form = ({ inputHandler, submitHandler }) => (
  // <form className="form centerInput" onSubmit={submitHandler}>
  <form className="form centerInput" onSubmit={submitHandler}>
    <div className="input-container">
      <input id="email" type="text" name="email" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label for="email" className="input-label">Email</label>
    </div>
    <div className="input-container">
      <input id="password" type="password" name="password" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label for="password" className="input-label">Password</label>
    </div>
    {/* <button className="btn submit">SUBMIT</button> */}
    <Button className="btn text-dark submit border-0" onClick={submitHandler}>SUBMIT</Button>
  </form>
);

export default Form;
