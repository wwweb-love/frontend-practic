import styled from "styled-components";
import { H2, Content } from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks"
import { useEffect, useState } from "react";

const UsersContainer = ({ className }) => {
    const [users, setUsers] = useState([])
    const [roles, setRoles] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    const reqeustServer = useServerRequest()
    useEffect(() => {
        Promise.all([reqeustServer(`fetchUsers`), reqeustServer(`fetchRoles`)]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error)
                return
            }

            setUsers(usersRes)
            setRoles(rolesRes)

        })
        reqeustServer(`fetchRoles`).then(({ rolesError, res }) => {
            if (rolesError) {
                return
            }

            setRoles(res)
        })

        reqeustServer(`fetchUsers`)
    }, [reqeustServer])

    return (
        <div className={className}>
            <Content error={errorMessage}>

                <H2>Пользователи</H2>

                <div>
                    <TableRow>
                        <div className="login-column">Логин</div>
                        <div className="regitrd-at-column">Дата регистрации</div>
                        <div className="role-column">Роль</div>
                    </TableRow>

                    {users.map(
                        ({ id, login, registrdAt, roleId }) => (
                            <UserRow
                                key={id}
                                login={login}
                                registredAt={registrdAt}
                                roleId={roleId}
                                roles={roles}
                            />
                        ),
                    )}
                </div>

            </Content>
        </div>
    );
};

export const Users = styled(UsersContainer)`
    width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center; 

`;
