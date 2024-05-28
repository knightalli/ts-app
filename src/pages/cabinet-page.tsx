import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {useEffect, useState} from "react";
import {IPost} from "../interfaces/post-interface.tsx";
import axios from "axios";
import {NavLink} from "react-router-dom";

const CabinetPage = () => {
    const noAvatar: string = 'https://cdn.icon-icons.com/icons2/2428/PNG/512/vk_black_logo_icon_147058.png';
//NOTE, ПОМЕНЯТЬ ВСЁ НА ЛОКАЛСТОРЕДЖ
    const token = useSelector((state: RootState) => state.isLogin.token)

    const initUser = {
        id: 0,
        first_name: '',
        email: '',
    }

    const [user, setUser] = useState<IPost>(initUser);
    const [isEdit, setIsEdit] = useState(false);

    const initUpdateUser = {
        first_name: user.first_name,
        email: user.email,
        avatar: user.avatar
    }

    const [updateUser, setUpdateUser] = useState<Partial<IPost>>(initUpdateUser);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    function updateUserData() {
        setUpdateUser({
            first_name: name,
            email: email,
            avatar: avatar
        })

        console.log('start');

        axios.patch(`https://reqres.in/api/users/${id}`, updateUser)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
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
                <p className="user-info">{user.first_name}</p>
                <p className="user-info">{user.email}</p>
                <button onClick={() => setIsEdit(true)}>Изменить информацию</button>
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