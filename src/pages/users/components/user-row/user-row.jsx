import styled from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { ROLE } from "../../../../constants";
import { TableRow } from "../table-row/table-row";

const userRowContainer = ({
    className,
    login,
    registredAt,
    roleId: userRoleId,
}) => {
    const dispatch = useDispatch();

    const roles = [];

    const onRoleChange = () => {};

    return (
        <div className={className}>
            <TableRow>
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
            </TableRow>
            <Icon
                id="fa-trash-o"
                margin="0 0 0 10px"
                onClick={() => dispatch(/* TODO */)}
            ></Icon>
        </div>
    );
};

export const UserRow = styled(userRowContainer)``;
