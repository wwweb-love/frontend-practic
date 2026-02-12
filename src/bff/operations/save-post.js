import { setUserRole } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";
import { updatePost } from "../api";

export const savePost = async (hash, newPostData) => {
    const accessRoles = [ROLE.ADMIN];

    if (!sessions.access(hash, accessRoles)) {
        return {
            error: "Доступ запрещен",
            res: null,
        };
    }

    const updatedPost = await updatePost(newPostData);

    return {
        error: null,
        res: updatedPost
    }
};
