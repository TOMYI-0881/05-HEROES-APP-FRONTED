import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="flex flex-col items-center">HOLA MUNDO</h1>
    <Button>Hola desde aca</Button>
  </StrictMode>,
);
