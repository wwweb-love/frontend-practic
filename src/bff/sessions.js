import { getSession, addSession, deleteSession, getUser } from "./api";

export const sessions = {
    list: {},
    create(user) {
        const hash = Math.random().toFixed(50)

        // this.list[hash] = user;

        addSession(hash, user)

        return hash
    },
    async remove(hash) {
        // delete this.list[hash]
        const session = await getSession(hash)

        if (!session) {
            return
        }

        deleteSession(session.id)
    },
    async access(hash, accessRoles) {
        const dbSession = await getSession(hash, )
        console.log("dbSession", dbSession)
        // const user = this.list[hash];
        return !!dbSession.user && accessRoles.includes(dbSession.user.roleId)
    }
}