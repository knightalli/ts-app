import {useEffect, useState} from "react";
import {IPost} from "../interfaces/post.tsx";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

const UserPage = () => {
  const noAvatar: string = 'https://cdn.icon-icons.com/icons2/2428/PNG/512/vk_black_logo_icon_147058.png';

  const id = useSelector((state: RootState) => state.editor.value)

  function seeData() {
    console.log(id);
  }
  seeData();

  const initUser = {
    id: 0,
    first_name: '',
    email: '',
  }
  const [user, setUser] = useState<IPost>(initUser);

  useEffect(() => {
    axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((res) => res.data.data)
        .then((data) => setUser(data))
        .catch(() => setUser(initUser));
  }, [id]);

    return (
      <>
          <div className="user-elem-container">
            {
                user.avatar &&
                <img alt={'Аватар'} src={user.avatar}/>

            }
            {
                !user.avatar &&
                <img alt={'Аватар'} src={noAvatar}/>
            }
            <p>{user.first_name}</p>
            <p>{user.email}</p>
        </div>
      </>
    )
}

export default UserPage