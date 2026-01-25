import styled from "styled-components";
import { Button, Icon } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROLE } from "../../../constants";
import { selectUserRole, selectUserLogin, selectUserSession } from "../../../selectors";
import { logout } from "./../../../action"
const RightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledLink = styled(Link)`
    cursor: pointer;
    font-size: 18px;
    width: 100px;
    height: 32px;
    border: 1px solid #000;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession)

    return (
        <div className={className}>
            <RightAlign>
                <Button>
                    {roleId == ROLE.GUEST ? (
                        <Link to="/login">Войти</Link>
                    ) : (
                        <>
                            <div>{login}</div>

                            <div onClick={() => dispatch(logout(session))}>
                                <Icon id="fa-sign-out" margin="10px 0 0 0" />
                            </div>
                        </>
                    )}
                </Button>
            </RightAlign>

            <RightAlign>
                <div onClick={() => navigate(-1)}>
                    <Icon id="fa-backward" margin="10px 0 0 0" />
                </div>
                <Link to="/post">
                    <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
                </Link>
                <Link to="/users">
                    <Icon id="fa-users" margin="10px 0 0 16px" />
                </Link>
            </RightAlign>
        </div>
    );
};

export const ControlPanel = styled(ControlPanelContainer)``;
