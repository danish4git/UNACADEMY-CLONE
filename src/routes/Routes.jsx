import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { AllClasses } from "../components/pages/AllClasses";
import { CoursePage } from "../components/pages/Coursepage";
import { ExplorePage } from "../pages/ExplorePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/jee-main-and-advanced-preparation"
          element={<CoursePage />}
        ></Route>

        <Route
          path="/jee-main-and-advanced-preparation/all-courses"
          element={<AllClasses />}
        ></Route>

        <Route path="/explore" element={<ExplorePage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
