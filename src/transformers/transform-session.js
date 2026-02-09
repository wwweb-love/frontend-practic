export const transformSession = (dbSession) => {
    console.log("dbSession", dbSession)
    return ({
    id: dbSession.id,
    hash: dbSession.hash,
    user: dbSession.user
})}