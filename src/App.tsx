import './App.css'
import CabinetPage from './pages/cabinet-page'
import MainPage from './pages/main-page'
import RegisterPage from './pages/register-page'
import UserPage from './pages/user-page'

function App() {

  return (
    <>
     <MainPage />
     <p> КОНЕЦ СТРАНИЦЫ</p>
     <CabinetPage />
     <p>КОНЕЦ СТРАНИЦЫ</p>
     <UserPage />
     <p>КОНЕЦ СТРАНИЦЫ</p>
     <RegisterPage />
    </>
  )
}

export default App
