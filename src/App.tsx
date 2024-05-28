import {RouterProvider, createBrowserRouter, Outlet, Navigate} from 'react-router-dom'
import './App.css'
import HeaderElem from './elements/header-elem'
import CabinetPage from './pages/cabinet-page'
import MainPage from './pages/main-page'
import RegisterPage from './pages/register-page'
import UserPage from './pages/user-page'

const AppLayout = () => (
  <div className="App">
    <HeaderElem />
    <Outlet />
  </div>
);

const isAuthenticated:boolean = localStorage.getItem('"QpwL5tke4Pnpja7X4"') != null;

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: isAuthenticated ? <MainPage /> : <Navigate to="/register" />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/user/:id",
        element: isAuthenticated ? <UserPage /> : <Navigate to="/register" />,
      },
      {
        path: "/cabinet",
        element: isAuthenticated ? <CabinetPage /> : <Navigate to="/register" />
      }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
