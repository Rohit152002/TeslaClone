import React from "react";
import "./Section.css";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
function Section({
  title,
  description,
  backgroungImg,
  leftbtnText,
  rightbtnText,
}) {
  return (
    <Wrap  bgImage={backgroungImg}>
      <Fade bottom>
      <div className="itemText">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      </Fade>
      <div className="buttons">
        <Fade bottom>
        <div className="buttonGroup">
          <div className="leftButton">{leftbtnText}</div>
          {rightbtnText && 
          <div className="rightButton">{rightbtnText}</div>
        }
          
        </div>
        </Fade>
        <div className="downArrow">
          <img src="/images/down-arrow.svg" />
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image:${props=>`url("/images/${props.bgImage}")`}
`

export default Section;
