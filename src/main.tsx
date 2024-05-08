import React from 'react'
import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import './index.css'
import MainPage from './pages/main-page';
import UserPage from './pages/user-page';
import CabinetPage from './pages/cabinet-page';
import RegisterPage from './pages/register-page';
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: MainPage,
//   },
//   {
//     path: "/user/:id",
//     element: UserPage
//   },
//   {
//     path: "/cabinet",
//     element: CabinetPage
//   },
//   {
//     path: "/registration",
//     elememnt: RegisterPage
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
