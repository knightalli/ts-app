import FilterElem from '../elements/filter-elem';
import SearchElem from '../elements/search-elem';
import axios from "axios";
import {useEffect, useState} from "react";
import UserElem from "../elements/user-elem.tsx";
import {IPost} from "../interfaces/post.tsx";
import "../styles/main-page.css";

function MainPage() {
    const initFilter = {
        idParameter: 'все',
        start: true,
        letter: '',
    }

    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [filteredPosts, setFilteredPosts] = useState<Array<IPost>>([]);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState(initFilter);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users?page=${page}`)
            .then((res) => res.data.data)
            .then((data) => setPosts(data))
            .catch(() => setPosts([]));
    }, [page]);

    useEffect(() => {
        let updatedPosts = posts;

        if (filter.letter) {
            updatedPosts = updatedPosts.filter(post =>
                filter.start
                    ? post.first_name.charAt(0).toLowerCase() === filter.letter.toLowerCase()
                    : post.first_name.charAt(0).toLowerCase() !== filter.letter.toLowerCase()
            );
        }

        if (filter.idParameter !== 'все') {
            updatedPosts = updatedPosts.filter(post =>
                filter.idParameter === 'чётные' ? post.id % 2 === 0 : post.id % 2 !== 0
            );
        }

        if (search) {
            updatedPosts = updatedPosts.filter(post =>
                post.first_name.toLowerCase().includes(search.toLowerCase()) ||
                post.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredPosts(updatedPosts);
    }, [posts, filter, search]);

    function increasePage(): void {
        setPage(2);
    }

    function decreasePage(): void {
        setPage(1);
    }

        return (
            <>
                <SearchElem onSearchChange={setSearch}/>
                <FilterElem onFilterChange={setFilter}/>
                <div className="post-list">
                    {filteredPosts.map((post: IPost) => {
                        return (
                            <UserElem key={post.id}
                                      first_name={post.first_name}
                                      id={post.id}
                                      avatar={post.avatar}
                                      email={post.email}
                            ></UserElem>
                        )
                    })}
                    {!filteredPosts.length &&
                        <div>Нет подходящих постов</div>
                    }
                </div>
                <div className="btn-page">
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