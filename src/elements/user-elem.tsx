import {IPost} from "../interfaces/post.tsx";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {edit} from "../store/editorID.ts";
import "../styles/user-elem.css";

const UserElem = (props:IPost) => {
    const { avatar, first_name, email, id}  = props;
    const noAvatar: string = 'https://cdn.icon-icons.com/icons2/2428/PNG/512/vk_black_logo_icon_147058.png';
    const dispatch = useDispatch();

    return (
      <>
          <NavLink className="non-decor" onClick={() => dispatch(edit(id))} to={`/user/${id}`}>
              <div className="user-elem-container">
                  {
                      avatar &&
                      <img alt={'Аватар'} src={avatar} width={150} height={150}/>
                  }
                  {
                      !avatar &&
                      <img alt={'Аватар'} src={noAvatar} width={150} height={150}/>
                  }
                  <p className="note">{first_name}</p>
                  <p className="note">{email}</p>
              </div>
          </NavLink>
      </>
    )
}

export default UserElem