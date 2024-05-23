import FilterElem from '../elements/filter-elem';
import SearchElem from '../elements/search-elem';
import axios from "axios";
import {useEffect, useState} from "react";
import UserElem from "../elements/user-elem.tsx";
import {IPost} from "../interfaces/post.tsx";

function MainPage() {
    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users?page=${page}`)
            .then((res) => res.data.data)
            .then((data) => setPosts(data))
            .catch(() => setPosts([]));
    }, [page]);

    function increasePage(): void {
        setPage(2);
    }

    function decreasePage(): void {
        setPage(1);
    }

        return (
            <>
                <SearchElem/>
                <FilterElem/>
                <div>
                    {posts.map((post: IPost) => {
                        return (
                            <UserElem key={post.id}
                                      first_name={post.first_name}
                                      id={post.id}
                                      avatar={post.avatar}
                                      email={post.email}
                            ></UserElem>
                        )
                    })}
                </div>
                <div>
                    {
                        page === 1 &&
                        <button onClick={increasePage}>Следующая страница</button>
                    }
                    {
                        page === 2 &&
                        <button onClick={decreasePage}>Предыдущая страница</button>
                    }
                </div>
            </>
        )
}

export default MainPage