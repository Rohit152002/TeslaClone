import React from "react";
import "./Section.css";
import styled from "styled-components";
function Section({title,description,backgroungImg,leftbtnText,rightbtnText}) {
  return (
    <div className="section">
      <div className="itemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <div className="buttonGroup">
          <div className="leftButton">{leftbtnText}</div>
          <div className="rightButton">{rightbtnText}</div>
        </div>
        <div className="downArrow">
          <img src="/images/down-arrow.svg" />
        </div>
      </div>
    </div>
  );
}

export default Section;
