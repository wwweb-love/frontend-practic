import { transformPost } from "../../transformers";

export const getPosts = (searchPhrase, page, limit) => {
// http://localhost:3033/posts?title_like=Товарищи&_page=1&_per_page=9
    console.log(searchPhrase, page, limit)
    return fetch(`http://localhost:3033/posts?title_like=${searchPhrase}&_page=${page}&_per_page=${limit}`)
        .then((loaded) => {
            console.log(loaded)
            return [loaded.json(), loaded.headers.get("X-Total-Count")]
        })

        // .then((loaded) => {
        //     console.log("loaded", loaded)
        //     return [loaded.data, loaded.last]
        // })
        .then(([loaded, links]) => {
            console.log("LOADED", loaded)
            console.log("LINKS", links)
            return ({
                posts: loaded && loaded.map(transformPost),
                links,
            }
            )
        });
}
