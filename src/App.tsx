import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Toaster />
    </>
  );
}
