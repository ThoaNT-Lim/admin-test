import { Spin } from "antd";
import React, { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import PATH_ROUTE from "./const";
import './styles.scss'
const CreateGroup = lazy(() => import("../pages/createGroup"));
const DetailGroup = lazy(() => import("../pages/detailGroup"));
const Home = lazy(() => import("../pages/homePage"));
const ListGroup = lazy(() => import("../pages/listGroup"));
const NotFound = lazy(() => import("../pages/notFound"));
const UserRoll = lazy(() => import("../pages/userRoll"));
const EditGroup = lazy(() => import("../pages/editGroup"));

function AppRouter() {
  const loader = <div className="sping-loading">
    <Spin />
  </div>
  return (
    <Fragment>
      <Suspense fallback={loader}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH_ROUTE.listGroup} element={<ListGroup />} />
        <Route
          path={PATH_ROUTE.detailGroup + "/:id"}
          element={<DetailGroup />}
        />
        <Route path={PATH_ROUTE.createGroup} element={<CreateGroup />} />
        <Route path={PATH_ROUTE.editGroup + "/:id"} element={<EditGroup />} />
        <Route path={PATH_ROUTE.checkRollUser} element={<UserRoll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </Fragment>
  );
}

export default AppRouter;
