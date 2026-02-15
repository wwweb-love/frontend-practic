import { transformPost } from "../../transformers";

export const getPosts = (page, limit) =>
    fetch(`http://localhost:3033/posts?_page=${page}&_per_page=${limit}`)
        .then((loaded) => loaded.json())
        .then((load) => load.data)
        .then((loadedUsers) => loadedUsers && loadedUsers.map(transformPost));
