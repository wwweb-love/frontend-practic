import { generateDate } from "./generate-date"
import { getUser } from "./get-user"
import { addUser } from "./add-user"
import { createSession } from "./create-session"

export const server = {
    async authorize(authorizeLogin, authorizePassword) {
        const user = await getUser(authorizeLogin)

        if (!user) {
            return {
                error: "Такой пользователь не найден",
                res: null
            }
        }

        if (authorizePassword !== user.password) {
            return {
                error: "Не верный пароль",
                res: null
            }
        }

        return {
            error: null,
            res: createSession(user.role_id)
        }
    },

    async register(registerLogin, registerPassword) {
        const user = await getUser(registerLogin)

        if (user) {
            return {
                error: "Такой логин уже используется",
                res: null
            }
        }

        await addUser(registerLogin, registerPassword)

        return {
            error: null,
            res: createSession(user.role_id)
        }

    }

}