import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home"
import MontarMarmita from "./pages/MonteSuaMarmita/MontarMarmita"
import Perfil from "./pages/Perfil/Perfil";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home/>,
    },
    {
      path:"/MonteSuaMarmita",
      element: <MontarMarmita/>,
    },
    {
      path:"/Perfil",
      element: <Perfil />
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);