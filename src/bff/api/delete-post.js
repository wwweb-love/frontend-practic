
export const deletePost = async (id) => {
    console.log("DELETEE POST ", id)

    fetch(`http://localhost:3033/posts/${id}`, {
        method: "DELETE",
    })
}
