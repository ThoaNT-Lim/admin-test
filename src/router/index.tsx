import React from "react";
import { Route, Routes } from "react-router";
import CreateGroup from "../pages/createGroup";
import DetailGroup from "../pages/detailGroup";
import Home from "../pages/homePage";
import ListGroup from "../pages/listGroup";
import NotFound from "../pages/notFound";
import UserRoll from "../pages/userRoll";
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
        <Route path={PATH_ROUTE.createGroup} element={<CreateGroup />} />
        <Route path={PATH_ROUTE.checkRollUser} element={<UserRoll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
