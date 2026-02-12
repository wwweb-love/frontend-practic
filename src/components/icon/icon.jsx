import styled from "styled-components"

const IconContainer = ({className, onClick, id, disabled, ...props}) => (
    <div className={className} {...props} onClick={onClick}>
        <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
)


export const Icon = styled(IconContainer)`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${({size = "24px"}) => size};
    margin: ${({margin = "0"}) => margin};
    cursor: pointer;
    color: ${({disabled}) => disabled ? "#ccc" : "#000"};

    &:hover {
        cursor: ${({onClick}) => onClick ? "pointer" : "default"};
    }
`

