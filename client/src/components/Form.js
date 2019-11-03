import React from "react";
import "./Form.css";

const Form = ({ inputHandler, submitHandler }) => (
  <form class="form" onSubmit={submitHandler}>
    <div class="input-container">
      <input id="username" type="text" name="username" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="username" class="input-label">Username</label>
    </div>
    <div class="input-container">
      <input id="password" type="password" name="password" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="password" class="input-label">Password</label>
    </div>
    <button class="btn">SUBMIT</button>
  </form>
);

export default Form;
