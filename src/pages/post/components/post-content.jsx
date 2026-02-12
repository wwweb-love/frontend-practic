import styled from "styled-components"
import { H2, Icon } from "../../../components"
import { SpecialPanel } from "./special-panel"

const PostContentContainer = ({className, post: { id, title, content, publishedAt, imageUrl } }) => {

    return (<div className={className}>
        <img src={imageUrl ? imageUrl : null} alt={title} />

        <H2>{title}</H2>

        <SpecialPanel publishedAt={publishedAt} margin={"-20px 0 20px"} editButton={<Icon id="fa-pencil-square-o" margin="0 7px 0 0" onClick={() => { }} />} />
        <div className="post-text">{content}</div>
    </div>)
}

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .post-text {
        font-size: 18px;
        white-space: pre-line;
    }
`