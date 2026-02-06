import styled from "styled-components"
import { H2, Icon } from "../../../components"

const PostContentContainer = ({className, post: { id, title, content, publishedAt, imageUrl } }) => {

    return (<div className={className}>
        <img src={imageUrl ? imageUrl : null} alt={title} />

        <H2>{title}</H2>

        <div className="special-panel">
            <div className="published-at">
                <Icon id="fa-calendar-o" margin="0 7px 0 0" onClick={() => {}}/>
                <div className="published-at-year">{publishedAt}</div>
                
            </div>

            <div className="buttons">
                <Icon id="fa-pencil-square-o" margin="0 7px 0 0" onClick={() => {}}/>
                <Icon id="fa-trash-o" margin="0 7px 0 0" onClick={() => {}}/>
            </div>
        </div>
        <div className="post-text">{content}</div>
    </div>)
}

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: -20px 0 20px;
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
    }
`