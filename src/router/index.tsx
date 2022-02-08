import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/homePage";
import NotFound from "../pages/notFound";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
