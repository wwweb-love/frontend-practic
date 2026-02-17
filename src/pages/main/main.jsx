import { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import { PostCard } from "./components";
import { useServerRequest } from "../../hooks";
import { PAGINATION_LIMIT } from "../../constants";
import { Pagination } from "./components/pagination";
import { getLastPageFromLinks } from "./utils";
import { Search } from "./components/search";
import { debounce } from "./utils";

const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1)
    const [shouldSearch, setSearchShould] = useState(false)
    const [searchPhrase, setSearchPhrase] = useState("")
    const requestServer = useServerRequest();

    useEffect(() => {

        requestServer(`fetchPosts`, searchPhrase, page, PAGINATION_LIMIT).then(({ res: { posts, links } }) => {
            setPosts(posts);
            setLastPage(Math.ceil(links / PAGINATION_LIMIT))
        });
    }, [requestServer, page, shouldSearch]);

    const startDelayedSearch = useMemo(() => debounce(setSearchShould, 2000), [])

    const onSearch = ({ target }) => {
        setSearchPhrase(target.value)

        startDelayedSearch(!shouldSearch)
    }

    return (
        <div className={className}>
            <Search searchPhrase={searchPhrase} onChange={onSearch} />
            {posts.length ? <div className="post-list">
                {posts.map(
                    ({ id, title, publishedAt, imageUrl, commentsCount }) => (
                        <PostCard
                            key={id}
                            id={id}
                            title={title}
                            publishedAt={publishedAt}
                            commentsCount={commentsCount}
                            imageUrl={imageUrl}
                        />
                    ),
                )}
            </div> : <div className="no-posts-found">Статьи не найдены</div>}
            {posts.length != 0  && <Pagination lastPage={lastPage} setLastPage={setLastPage} page={page} setPage={setPage} />}

        </div>
    );
};

export const Main = styled(MainContainer)`

    .post-list {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
    }

    & .no-posts-found {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    } 
`;
