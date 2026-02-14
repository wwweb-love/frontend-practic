import { transformPost } from "../../transformers";

export const getPosts = () =>
    fetch("http://localhost:3033/posts")
        .then((loaded) => loaded.json())
        .then((loadedUsers) => loadedUsers && loadedUsers.map(transformPost));
