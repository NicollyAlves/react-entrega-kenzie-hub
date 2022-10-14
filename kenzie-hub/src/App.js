import { ProviderHome } from "./contexts/todos"
import { ToastContainer } from "react-toastify"
import { Rotas } from "./routes"
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";


export const App = () => {
  return (
    <>
        <ToastContainer />
      <ProviderHome>
        <Rotas />
      </ProviderHome>
    </>
  )
}