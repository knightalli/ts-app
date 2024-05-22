import {IPost} from "../interfaces/post.tsx";
import {NavLink} from "react-router-dom";

const UserElem = (props:IPost) => {
    const { avatar, first_name, email, id}  = props;

    return (
      <>
          <NavLink to={`/user/${id}`}>
              <div className="user-elem-container">
                  <img alt={'Аватар'} src={avatar}/>
                  <p>{first_name}</p>
                  <p>{email}</p>
              </div>
          </NavLink>
      </>
    )
}

export default UserElem