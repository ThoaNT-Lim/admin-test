import React from "react";
import { Route, Routes } from "react-router";
import DetailGroup from "../pages/detailGroup";
import Home from "../pages/homePage";
import ListGroup from "../pages/listGroup";
import NotFound from "../pages/notFound";
import PATH_ROUTE from "./const";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH_ROUTE.listGroup} element={<ListGroup />} />
        <Route
          path={PATH_ROUTE.detailGroup + "/:id"}
          element={<DetailGroup />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
