import { AuthLayout } from "@/layouts/AuthLayout";
import { SignUp } from "@/pages/SignUp";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
