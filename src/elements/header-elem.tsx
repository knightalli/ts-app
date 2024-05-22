
import '../styles/header-page.css'
import {NavLink} from "react-router-dom"; 

const HeaderElem = () => {

    return (
      <>
        <div className='header-container'>
          <NavLink to={'/'}>
            <div className='header-logo'>Логотип</div>
          </NavLink>
          <NavLink to={'/cabinet'}>
             <button className='header-cabinet-button'>Перейти в личный кабинет</button>
          </NavLink>
        </div>
      </>
    )
}

export default HeaderElem