import { Route, Routes } from "react-router-dom";
import { StepSignUp } from "./StepSignUp";

const AuthPage = () => (
  <Routes>
    <Route path="step-sign-up" element={<StepSignUp />} />
    <Route index element={<StepSignUp />} />
  </Routes>
);

export { AuthPage };
