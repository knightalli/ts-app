import FilterElem from '../elements/filter-elem';
import SearchElem from '../elements/search-elem';
import axios from "axios";
import {useEffect, useState} from "react";

function MainPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.data)
            .then((data) => setPosts(data))
            .catch(() => setPosts([]));
    }, []);

        return (
            <>
                <SearchElem/>
                <FilterElem/>
            </>
        )
    }

export default MainPage