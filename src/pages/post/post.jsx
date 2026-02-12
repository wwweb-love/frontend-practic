import { useEffect, useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useMatch } from "react-router"
import styled from "styled-components"
import { loadPostAsync, RESET_POST_DATA } from "../../action"
import { selectPost } from "../../selectors"
import { useServerRequest } from "../../hooks"
import { PostContent, Comments } from "./components"
import { PostForm } from "./components/post-form"


const PageContainer = ({ className }) => {

    const post = useSelector(selectPost)
    const dispatch = useDispatch()
    const requestServer = useServerRequest()
    const params = useParams()
    const isEditing = useMatch('/post/:id/edit')

    useLayoutEffect(() => {
        dispatch(RESET_POST_DATA)
    }, [dispatch])

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id))
    }, [dispatch, requestServer, params.id])

    return (
        <div className={className}>
            {isEditing ? (
                <PostForm post={post}/>
            ) : (<>
                    <PostContent post={post} />
                    <Comments comments={post.comments} postId={post.id} />
                </>)
            }

        </div >
    )
}


export const Post = styled(PageContainer)`
    padding: 40px 0px;
    margin: 0 80px;
`