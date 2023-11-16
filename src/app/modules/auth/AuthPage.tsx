import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
import { ForgotPassword } from "./components/ForgotPassword";
import { Login } from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import { StepSignUp } from "./StepSignUp";

const AuthPage = () => (
  <Routes>
    <Route path="step-sign-up" element={<StepSignUp />} />
    <Route index element={<StepSignUp />} />
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Route>
  </Routes>
);

export { AuthPage };
