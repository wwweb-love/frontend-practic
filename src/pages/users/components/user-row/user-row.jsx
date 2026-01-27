import styled from "styled-components";
import { Icon } from "../../components";
import { useDispatch } from "react-redux";
import { ROLE } from "../../../../constants";

const userRowContainer = ({ className, login, registredAt, roleId: userRoleId  }) => {
    const dispatch = useDispatch()

    const roles = []

    const onRoleChange = () => {};

    return (
        <div className={className}>
            <div className="user-data">
                <div className="login-column">{login}</div>
                <div className="regitrd-at-column">{registredAt}</div>
                <div className="role-column">
                    <select value={userRoleId} onChange={() => onRoleChange()}>
                        {roles.map(({ id: roleId, name: roleName }) => (
                            <option value={roleId}>{roleName}</option>
                        ))}
                    </select>
                    <Icon
                        id="fa-floppy-o"
                        margin="0 0 0 10px"
                        onClick={() => dispatch(/* TODO */)}
                    ></Icon>
                </div>
            </div>
            <Icon
                id="fa-trash-o"
                margin="0 0 0 10px"
                onClick={() => dispatch(/* TODO */)}
            ></Icon>
        </div>
    );
};

export const UserRow = styled(userRowContainer)``