import styled from "styled-components"
import { Icon } from "../../../components"


const TextContainer = ({ className }) => (
    <div className={className}>
        <LargeText>Блог</LargeText>
        <SmallText>веб-разработчика</SmallText>
    </div>
)

const LargeText = styled.div`
    font-size: 32px;
    font-weight: bold;
`

const SmallText = styled.div`
    font-size: 18px;
    font-weight: bold;
`
const Text = styled(TextContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LogoContainer = ({ className }) => (
    <div className={className}>
        <Icon size="70px" margin="0 10px 0 0" id="fa-code" />
        <Text />
    </div>
)

export const Logo = styled(LogoContainer)`
    display: flex;
`