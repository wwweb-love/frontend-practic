export const getComments = (postId) => fetch(`http://localhost:3033/comments?post_id=${postId}`)
    .then((loaded) => loaded.json())