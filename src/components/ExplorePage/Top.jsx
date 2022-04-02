import React from "react";
import styled from "styled-components";

export const Top = () => {
  const handleChange = (e) => {
    let data = e.target.value;
    console.log("data:", data);
  };

  return (
    <div style={{ backgroundColor: "rgb(244,249,253)" }}>
      <OuterDiv>
        <MainDiv>
          <h1 style={styleForH1}>Choose your goal</h1>
          <div style={inputDiv}>
            <Input
              type="text"
              placeholder="Search for your goal"
              onKeyUp={handleChange}
            />
          </div>
        </MainDiv>
      </OuterDiv>
    </div>
  );
};

const OuterDiv = styled.div`
  background-image: url(https://static.uacdn.net/production/_next/static/images/goal/managegoal-k12-light.svg);
  background-position: right bottom;
  background-repeat: no-repeat;
  text-align: center;
  transition: background 1s ease-in-out 0s;
  height: 266px;
  max-width: 1136px;
  margin: auto;
  text-align: center;
`;

const inputDiv = {
  // border: "1px solid red",
  width: "340px",
  height: "50px",
  marginTop: "30px",
  border: "1px solid #E9EEF2",
};

const Input = styled.input`
  border: none;
  padding: 10px;
  width: 100%;
  height: 100%;
  border: #e9eef2;
  background-color: #ffffff;
  &:focus {
    outline: none;
  }
`;

const MainDiv = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: left;
  position: relative;
  z-index: 1;
`;

const styleForH1 = {
  fontWeight: "bold",
  fontSize: "40px",
  lineHeight: "150%",
  color: "#3C4852",
  margin: "0px",
  paddingTop: "64px",
};
