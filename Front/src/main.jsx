import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ApresentationScreen from "./pages/ApresentationScreen/ApresentationScreen";
import Home from "./pages/Home/Home"
import MontarMarmita from "./pages/MonteSuaMarmita/MontarMarmita"
import Perfil from "./pages/Perfil/Perfil";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Sacola from "./pages/Sacola/Sacola";
import Pedidos from "./pages/Pedidos/Pedidos";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <ApresentationScreen />,
    },
    {
      path:"/Home",
      element: <Home />,
    },
    {
      path:"/MonteSuaMarmita",
      element: <MontarMarmita/>,
    },
    {
      path:"/Perfil",
      element: <Perfil />
    },
    {
      path:"/Cadastro",
      element: <Cadastro />,
    },
    {
      path:"/Login",
      element: <Login />,
    },
    {
      path:"/Sacola",
      element: <Sacola />
    },
    {
      path:"/Pedidos",
      element: <Pedidos />
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);