import styled from "styled-components";
import { H2 } from "../../components";
import { useDispatch } from "react-redux";
import { UserRow, TableRow } from "./components";

const UsersContainer = ({ className }) => {
    const users = [];
    const dispatch = useDispatch();

    return (
        <div className={className}>
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
                        />
                    ),
                )}
            </div>
        </div>
    );
};

export const Users = styled(UsersContainer)`
    width: 570px;
    display: flex;
    flex-direction: column;
    align-items: center; 

`;
