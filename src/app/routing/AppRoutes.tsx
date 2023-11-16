/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthPage } from "../modules/auth";
import { App } from "../App";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import HomePage from "../pages/homepage/HomePage";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="auth/*" element={<AuthPage />} />
          <Route path="*" element={<MasterLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
