import axios from "axios";
import {useEffect, useState} from "react";
import {IUser} from "../interfaces/user-interface.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setIsLogin, setStoreToken} from "../store/editorIsLogin.ts";

const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [token, setToken] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAvatar(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (token) {
            const localUserData: IUser = {
                name,
                email,
                password,
                avatar
            };
            localStorage.setItem(`${JSON.stringify(token)}`, JSON.stringify(localUserData));
        }
    }, [token, name, email, password, avatar]);

    function checkToken(token: string) {
        const findToken = localStorage.getItem(`${token}`);
        const isRegister:boolean = findToken ? JSON.parse(findToken) : false;
        if (isRegister) {
            dispatch(setIsLogin(true));
            dispatch(setStoreToken(token));
            navigate('/');
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            email,
            password
        };

        console.log(userData);

        axios.post(`https://reqres.in/api/register`, userData)
            .then(response => {
                setToken(response.data.token);
                checkToken(token);
                navigate('/');
            }).catch(error => console.log(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Имя</label>
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    onChange={handleNameChange}
                    required
                />

                <label>Аватар</label>
                <input
                    type="text"
                    placeholder="Вставьте ссылку на аватар"
                    value={avatar}
                    onChange={handleAvatarChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Введите email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />

                <label>Пароль</label>
                <input
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};


export default RegisterPage