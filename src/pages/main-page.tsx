import FilterElem from '../elements/filter-elem';
import SearchElem from '../elements/search-elem';
import axios from "axios";
import {useEffect, useState} from "react";
import UserElem from "../elements/user-elem.tsx";
import {IPost} from "../interfaces/post.tsx";

function MainPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://reqres.in/api/users?page=1")
            .then((res) => res.data.data)
            .then((data) => setPosts(data))
            .catch(() => setPosts([]));
    }, []);

        return (
            <>
                <SearchElem/>
                <FilterElem/>
                <div>
                    { posts.map((post: IPost) => {
                        return (
                            <UserElem key={post.id}
                                      first_name={post.first_name}
                                      id={post.id}
                                      avatar={post.avatar}
                                      email={post.email}
                            ></UserElem>
                        )
                    }

                    )}
                </div>
            </>
        )
    }

export default MainPage