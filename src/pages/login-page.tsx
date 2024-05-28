import axios from "axios";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState<string>('');


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    function checkToken(token: string) {
        const findToken = localStorage.getItem(`${token}`);
        const isRegister:boolean = findToken ? JSON.parse(findToken) : false;
        if (isRegister) {
            //меняем isLogin
            //переходим на другую страничку
        }
        //проверяем токен, если да, то на начальную, если нет, то на конец
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };

        axios.post(`https://reqres.in/api/login`, userData)
            .then(response => {
                setToken(response.data);
                checkToken(token);
            })
            .catch(error => {
                console.error("Login failed:", error);
            });
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="text"
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
                </form>
                <button type="submit">Войти</button>
            </div>
            <NavLink to={'/register'}>
                <button>Регистрация</button>
            </NavLink>
        </>
    )
}

export default LoginPage