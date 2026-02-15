import { useEffect, useState } from "react";
import styled from "styled-components";
import { PostCard } from "./components";
import { useServerRequest } from "../../hooks";
import { PAGINATION_LIMIT } from "../../constants";
import { Pagination } from "./components/pagination";

const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1)
    const requestServer = useServerRequest();

    useEffect(() => {
        requestServer(`fetchPosts`, page, PAGINATION_LIMIT).then((posts) => {
            setPosts(posts.res);
            setLastPage(2)
        });
    }, [requestServer, page]);


    return (
        <div className={className}>
            <div className="post-list">
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
            </div>
            {lastPage !== 1 && <Pagination lastPage={lastPage} setLastPage={setLastPage} page={page} setPage={setPage} />}
            
        </div>
    );
};

export const Main = styled(MainContainer)`
    .post-list {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
    }
`;
