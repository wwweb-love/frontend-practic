import styled from "styled-components"
import { H2, Icon, Input } from "../../../components"
import { SpecialPanel } from "./special-panel"
import { useRef } from "react"
import { sanitizeContent } from "./utils/sanitize-content"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { savePostAsync } from "../../../action"
import {useServerRequest} from "../../../hooks"

const PostFormContainer = ({ className, post: { id, title, content, publishedAt, imageUrl } }) => {

    const imageRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const serverRequest = useServerRequest()

    const onSave = () => {
        const newImageUrl = imageRef.current.value
        const newTitle = titleRef.current.value
        const newContent = sanitizeContent(contentRef.current.innerHTML)


        dispatch(savePostAsync(serverRequest, {
            id,
            imageUrl: newImageUrl,
            title: newTitle,
            content: newContent
        })).then(() => navigate(`/post/${id}`))
    }

    return (<div className={className}>
        <Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
        <Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />

        {/* <img src={imageUrl ? imageUrl : null} alt={title} /> */}
        {/* <H2>{title}</H2> */}

        <SpecialPanel publishedAt={publishedAt} margin={"20px 0"} editButton={<Icon id="fa-floppy-o" margin="0 7px 0 0" onClick={onSave} />} />
        <div ref={contentRef} contentEditable={true} suppressContentEditableWarning={true} className="post-text">{content}</div>
    </div>)
}

export const PostForm = styled(PostFormContainer)`

    display: flex;
    flex-direction: column;

    & .post-text {
        font-size: 18px;
        white-space: pre-line;
    }
`