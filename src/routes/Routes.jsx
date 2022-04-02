import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { ExplorePage } from "../pages/ExplorePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
