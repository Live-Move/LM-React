import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouteDef } from "./RouteDef";

function AppPages(props) {
  return (
    
      <Routes>
        {Object.entries({ ...AppRouteDef }).map(
          ([name, { path, element }], index) => (
            <Route key={name + index} path={path} element={element} />
          )
        )}
      </Routes>
    
  );
}

export default AppPages;
