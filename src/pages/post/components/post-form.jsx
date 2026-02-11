import styled from "styled-components"
import { H2, Icon, Input } from "../../../components"

const PostFormContainer = ({ className, post: { id, title, content, publishedAt, imageUrl } }) => {
    console.log("isEditing")

    return (<div className={className}>
        <Input defaultValue={imageUrl} />
        <Input defaultValue={title} />

        {/* <img src={imageUrl ? imageUrl : null} alt={title} /> */}
        {/* <H2>{title}</H2> */}

        <div className="special-panel">
            <div className="published-at">
                <Icon id="fa-calendar-o" margin="0 7px 0 0" onClick={() => { }} />
                <div className="published-at-year">{publishedAt}</div>
            </div>

            <div className="buttons">
                <Icon id="fa-floppy-o" margin="0 7px 0 0" onClick={() => { }} />
                <Icon id="fa-trash-o" margin="0 7px 0 0" onClick={() => { }} />
            </div>
        </div>
        <div contentEditable={true} suppressContentEditableWarning={true} className="post-text">{content}</div>
    </div>)
}

export const PostForm = styled(PostFormContainer)`

    display: flex;
    flex-direction: column;

    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        font-size: 20px;
        height: 100%;
    }

    & .published-at {
        display: flex;
        gap: 10px;
    }

    & .published-at-year {
        display: flex;
        white-space: nowrap;
    }

    & i {
        position: relative;
        // font-size: 20px;
        top: -1px;
    }

    & .buttons {
        display: flex;
    }

    & .post-text {
        font-size: 18px;
        white-space: pre-line;
    }
`