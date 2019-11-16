 import React from "react";
import "./Form.css";
// Need to add all event form inputs and search functions
const Form = ({ inputHandler, submitHandler }) => (
  <form class="form" onSubmit={submitHandler}>
    <div class="input-container form-container">
      <input id="name" type="text" name="name" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="name" class="input-label">Event Name</label>
    </div>
    <div class="input-container form-container">
      <input id="date" type="date" name="date" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="date" class="input-label"></label>
    </div>
    <div class="input-container form-container">
      <input id="startTime" type="text" name="startTime" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="startTime" class="input-label">Start Time</label>
    </div>
    <div class="input-container form-container">
      <input id="endTime" type="text" name="endTime" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="endTime" class="input-label">End Time</label>
    </div>
    <div class="input-container form-container">
      <input id="description" type="description" name="description" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="description" class="input-label">description</label>
    </div>
    <div class="input-container form-container">
      <input id="city" type="text" name="city" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="city" class="input-label">city</label>
    </div>
    <div class="input-container form-container">
      <input id="state" type="text" name="state" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="state" class="input-label">state</label>
    </div>
    <div class="input-container form-container">
      <input id="zip" type="number" name="zip" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="zip" class="input-label">zip</label>
    </div>
    <div class="input-container form-container">
      <select>
      <input id="public" type="boolean" name="public" onChange={inputHandler} required />
      <option value="0">Public:</option>
        <option value="1">Yes</option>
        <option value="2">No</option>
      </select>
    </div>
    <div class="input-container form-container">
      <input id="phone" type="phone" name="phone" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="phone" class="input-label">phone</label>
    </div>
    <div class="input-container form-container">
      <input id="maxEntertainers" type="number" name="maxEntertainers" onChange={inputHandler} required />
      <span class="input-underline"></span>
      <label for="maxEntertainers" class="input-label">maxEntertainers</label>
    </div>
    {/* entsContacted automatically set to false*/}
    {/* entsConfirmed  automatically set to false*/}
    <div>
    {/* add search function and button to search in a component add each user choice to the events.search array */}
        </div>

    <button class="btn">SUBMIT</button>
  </form>
);

export default Form;
