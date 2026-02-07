import { setPostData } from "./set-post-data"

export const loadPostAsync = (serverRequest, postId) => (dispatch) => {
    serverRequest("fetchPost", postId).then((loadedData) => dispatch(setPostData(loadedData.res)))
}