import { useEffect, useState } from "react";
import styled from "styled-components";
import { PostCard } from "./components";
import { useServerRequest } from "../../hooks";

const MainContainer = ({ className }) => {
    const [posts, setPosts] = useState([]);
    const requestServer = useServerRequest()

    useEffect(() => {
        requestServer(`fetchPosts`).then((posts) => {
            setPosts(posts.res);
        });
    }, [requestServer]);

    console.log(posts)

    return (
        <div className={className}>
            {posts.map(({ id, title, publishedAt, commentsCount }) => (
                <PostCard
                    key={id}
                    id={id}
                    title={title}
                    publishedAt={publishedAt}
                    commentsCount={commentsCount}
                />
            ))}
        </div>
    );
};

export const Main = styled(MainContainer)``;
