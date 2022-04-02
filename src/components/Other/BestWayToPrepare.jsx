import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BestWayToPrepare = () => {
  const Sections = styled.section``;

  const TopDiv = styled.div``;

  const LinkTag = styled(Link)`
    text-decoration: none;
    border-bottom: #08bd80 1px dashed;
    color: #08bd80;
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 6px;
  `;

  return (
    <Sections>
      <TopDiv></TopDiv>
      <div></div>
    </Sections>
  );
};
