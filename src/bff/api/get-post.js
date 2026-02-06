import { transformPost } from "../../transformers";

export const getPost = async (postId) => 
    fetch(`http://localhost:3033/posts/${postId}`)
        .then((loaded) => loaded.json())
        .then((loaded) => loaded && transformPost(loaded)) 

