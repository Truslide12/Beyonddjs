import React from "react";
import "./Form.css";
// Update this for each differnt role - we probably need different forms for the main registration then change the input values for each role
const Form = ({ inputHandler, submitHandler }) => (
  <form class="form" onSubmit={submitHandler}>
    <div class="input-container">
      <input id="email" type="text" name="email" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="email" class="input-label">Email</label>
    </div>
    <div class="input-container">
      <input id="password" type="password" name="password" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="password" class="input-label">Password</label>
    </div>
    <div class="input-container">
      <input id="role" type="text" name="role" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="role" class="input-label">Role</label>
    </div>
    <div class="input-container">
      <input id="firstName" type="text" name="firstName" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="firstName" class="input-label">first Name</label>
    </div>
    <div class="input-container">
      <input id="lastName" type="text" name="lastName" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="lastName" class="input-label">Last Name</label>
    </div>
    <div class="input-container">
      <input id="city" type="text" name="city" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="city" class="input-label">city</label>
    </div>
    <div class="input-container">
      <input id="state" type="text" name="state" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="state" class="input-label">state</label>
    </div>
    <div class="input-container">
      <input id="zip" type="text" name="zip" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="zip" class="input-label">zip</label>
    </div>
    <div class="input-container">
      <input id="phone" type="text" name="phone" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="phone" class="input-label">phone</label>
    </div>
    <button class="btn">SUBMIT</button>
  </form>
);

export default Form;
