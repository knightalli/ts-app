
import '../styles/header-page.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {edit} from "../store/editorID.ts";

const HeaderElem = () => {
    const isLogin:boolean = useSelector((state: RootState) => state.isLogin.value)
    const dispatch = useDispatch();

    function editUserId() {
        const id = localStorage.getItem('id');
        if (id)
        dispatch(edit(JSON.parse(id)));
    }

    return (
      <>
        <div className='header-container'>
          <NavLink to={'/'}>
            <div className='header-logo'>Логотип</div>
          </NavLink>
            {isLogin &&
                <NavLink onClick={editUserId} to={'/cabinet'}>
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