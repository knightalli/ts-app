
import '../styles/header-page.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

const HeaderElem = () => {
    const isLogin:boolean = useSelector((state: RootState) => state.isLogin.value)

    return (
      <>
        <div className='header-container'>
          <NavLink to={'/'}>
            <div className='header-logo'>Логотип</div>
          </NavLink>
            {isLogin &&
                <NavLink to={'/cabinet'}>
                    <button className='header-cabinet-button'>Перейти в личный кабинет</button>
                </NavLink>
            }
            {!isLogin &&
                <NavLink to={'/login'}>
                    <button className='header-cabinet-button'>Войти</button>
                </NavLink>
            }
        </div>
      </>
    )
}

export default HeaderElem