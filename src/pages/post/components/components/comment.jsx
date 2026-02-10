import styled from "styled-components"
import { Icon } from "../../../../components"
import { useDispatch } from "react-redux"
import { removeCommentAsync } from "../../../../action"
import { useServerRequest } from "../../../../hooks"

const CommentContainer = ({ className, id, author, content, publishedAt, postId }) => {

    const dispatch = useDispatch()
    const serverRequest = useServerRequest()

    const onCommentRemove = (id) => {
            dispatch(removeCommentAsync(serverRequest, postId, id))
        }

    return (
        <div className={className}>
            <div className="comment">
                <div className="information-panel">
                    <div className="author">
                        <Icon id="fa-user-circle-o" size="21px" margin="0 10px 0 0" onClick={() => { }} />
                        {author}</div>
                    <div className="published-at">
                        <Icon id="fa-calendar-o" size="21px" margin="0 10px 0 0" onClick={() => { }} />
                        {publishedAt}</div>
                </div>
                <div className="comment-text">{content}</div>
            </div>
            <Icon id="fa-trash-o" onClick={() => onCommentRemove(id)} />

        </div>
    )
}

export const Comment = styled(CommentContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    & .comment {
    padding: 10px 5px;
        width: 550px;
        border: 1px solid black;
    }

    & .information-panel {
        display: flex;
        justify-content: space-between;

    }

    & .author {
        display: flex;
    }

    & .published-at {
        display: flex;
    }
`