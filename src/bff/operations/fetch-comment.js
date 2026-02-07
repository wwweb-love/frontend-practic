import { addComment, getComments, getPost } from "../api"
import { sessions } from "../sessions"
import {ROLE} from "../constants"
export const fetchComment = async (userSession, userId, postId, content) => {
    const accesComment = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

    if (!sessions.access(userSession, accesComment)) {
        return {
            error: "Авторизуйтесь",
            res: null
        }
    }
    console.log('userId, postId, content')  
    await addComment(userId, postId, content)

    const post = await getPost(postId)

    const comments = await getComments(postId)

    return {
        error: null,
        res: {
            ...post,
            comments
        }
    }

}