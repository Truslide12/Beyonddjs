import React from "react";
import "./Title.css";

const Title = ({ children }) => (
  <div class="title-box">
    <h1 class="title">{ children }</h1>
  </div>
);

export default Title;
