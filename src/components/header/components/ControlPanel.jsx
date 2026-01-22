import styled from "styled-components";
import { Button, Icon } from "../../../components";
import { Link, useNavigate } from "react-router-dom";

const RightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
`

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

`

const ControlPanelContainer = ({ className }) => {

    const navigate = useNavigate()

    return (
        <div className={className}>
            <RightAlign>
                <Button>
                    <Link to="/login">Войти</Link>
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
    )
}

export const ControlPanel = styled(ControlPanelContainer)`
 `