import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import {
  DynamicForm,
  FormikAbstract,
  FormikComponents,
  FormikPage,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from "./03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup Form Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup Form Abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-dynamic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik Page Dynamics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Dynamics
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik" element={<FormikPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstract" element={<FormikAbstract />} />
          <Route path="/formik-dynamic" element={<RegisterFormikPage />} />
          <Route path="/formik-dynamic-form" element={<DynamicForm />} />

          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
