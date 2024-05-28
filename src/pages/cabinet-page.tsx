import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import { useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {IUser} from "../interfaces/user-interface.tsx";
import {editUser} from "../store/editorUser.ts";


const CabinetPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const noAvatar: string = 'https://cdn.icon-icons.com/icons2/2428/PNG/512/vk_black_logo_icon_147058.png';

    const user:IUser = useSelector((state: RootState) => state.user.value);
    const token = useSelector((state: RootState) => state.isLogin.token);

    const [isEdit, setIsEdit] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState(noAvatar);

    function updateUserData() {
        const updateUser: IUser = {...user};
        updateUser.name = name;
        updateUser.avatar = avatar;
        updateUser.email = email;
        localStorage.setItem(`${token}`, JSON.stringify(updateUser));
        dispatch(editUser(updateUser));
        setIsEdit(false);
    }

    function exitLogin() {
        localStorage.removeItem(`"${token}"`);
        navigate('/register');
    }

    return (
        <>{!isEdit &&
            <div className="user-page-container">
                <NavLink to={`/`}>
                    <button>Вернуться назад</button>
                </NavLink>
                {
                    user.avatar &&
                    <img width={350} height={350} alt={'Аватар'} src={user.avatar}/>
                }
                {
                    !user.avatar &&
                    <img width={350} height={350} alt={'Аватар'} src={noAvatar}/>
                }
                <p className="user-info">{user.name}</p>
                <p className="user-info">{user.email}</p>
                <button onClick={() => setIsEdit(true)}>Изменить информацию</button>
                <button onClick={() => exitLogin()}>Выйти</button>
            </div>
        }
            {isEdit &&
                <div className="user-page-container">
                    <button onClick={() => setIsEdit(false)}>Отменить редактирование</button>
                    <div className="user-info-input">
                        <p className="user-info">Имя</p>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="user-input" type="text" placeholder="Введите своё имя"/>
                    </div>
                    <div className="user-info-input">
                        <p className="user-info">Почта</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="user-input" type="text" placeholder="Введите свой e-mail"/>
                    </div>
                    <div className="user-info-input">
                        <p className="user-info">Фотография</p>
                        <input value={avatar} onChange={(e) => setAvatar(e.target.value)} className="user-input" type="text" placeholder="Вставьте ссылку на аватар"/>
                    </div>
                    <button onClick={updateUserData}>Сохранить данные</button>
                </div>
            }
        </>
    )
}
  
  export default CabinetPage