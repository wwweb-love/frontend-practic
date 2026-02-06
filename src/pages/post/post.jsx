import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import styled from "styled-components"
import { loadPostAsync } from "../../action"
import { selectPost } from "../../selectors"
import { useServerRequest } from "../../hooks"
import {PostContent, Comments} from "./components"

const PageContainer = ({ className }) => {

    const post = useSelector(selectPost)
    const dispatch = useDispatch()
    const requestServer = useServerRequest()
    const params = useParams()

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id))
    }, [dispatch, requestServer, params.id])

    return (
        <div className={className}>
            <PostContent post={post}/>
            <Comments comments={post.comments} />
        </div>
    )
}


export const Post = styled(PageContainer)`
    padding: 40px 0px;
    margin: 0 80px;
`