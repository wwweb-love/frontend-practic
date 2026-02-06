import styled from "styled-components"
import { Icon } from "../../../components"
import { Comment } from "./components"
import { useState } from "react"

const CommentsContainer = ({ className, comments }) => {

    const [newComment, setNewComment] = useState('')
    // const { id, author, content, publishedAt } = comments
    return (
        <div className={className}>
            <div className="new-comment">
                <textarea value={newComment} placeholder="Комментарий..." onChange={(e) => setNewComment(e.target.value)}></textarea>
                <Icon id="fa-paper-plane-o" margin="0 0 0 10px" onClick={() => { }} />
            </div>
            <div className="comments">
                {/* <Comment key={0} id={0} author={"author"} content={"content"} publishedAt={"publishedAt"} /> */}

                {comments.map(({ id, author, content, publishedAt }) => (
                    <Comment key={id} id={id} author={author} content={content} publishedAt={publishedAt} />
                ))}
            </div>
        </div>
    )
}

export const Comments = styled(CommentsContainer)`
    display: flex;
    width: 580px;
    margin: 0px auto;
    
    & .new-comment {
        width: 100%;
        display: flex;
        margin: 20px 0 0;
    }

    & textarea {
        width: 100%;
        height: 120px;
        resize: none;
        font-size: 18px;
    }

    
`