import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouteDef } from "./RouteDef";
import ViewArea from "./Responsive/ViewArea";

function AppPages(props) {
  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <ViewArea>
          <Routes>
            {Object.entries({ ...AppRouteDef }).map(
              ([name, { path, element }], index) => (
                <Route key={name + index} path={path} element={element} />
              )
            )}
          </Routes>
        </ViewArea>
      </BrowserRouter>
    </div>
  );
}

export default AppPages;
