import styled from "styled-components";
import { Icon } from "../../../components";

const RightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Button = styled.button`
    font-size: 18px;
    width: 100px;
    height" 32px;
`

const ControlPanelContainer = ({ className }) => {
    return (
        <div className={className}>
            <RightAlign>
                <Button>Войти</Button>
            </RightAlign>

            <RightAlign>
                <Icon id="fa-backward" margin="10px 0 0 0"/>
                <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
                <Icon id="fa-users" margin="10px 0 0 16px" />
            </RightAlign>
        </div>
    )
}

export const ControlPanel = styled(ControlPanelContainer)`
 `