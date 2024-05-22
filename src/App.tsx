import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'
import './App.css'
import HeaderElem from './elements/header-elem'
import CabinetPage from './pages/cabinet-page'
import LoginPage from './pages/login-page'
import MainPage from './pages/main-page'
import RegisterPage from './pages/register-page'
import UserPage from './pages/user-page'

const AppLayout = () => (
  <div className="App">
    <HeaderElem />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/cabinet",
        element: <CabinetPage />
      }   
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
