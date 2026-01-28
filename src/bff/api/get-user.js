export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3033/users?login=${loginToFind}`)
        .then((loaded) => loaded.json())
        .then(([loaded]) => loaded && ({
            id: loaded.id,
            login: loaded.login,
            password: loaded.password,
            registedAt: loaded.registed_at,
            roleId: loaded.role_id
        })) 

