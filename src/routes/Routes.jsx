import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { CoursePage } from "../components/pages/CoursePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/jee-main-and-advanced-preparation"
          element={<CoursePage />}
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
