import styled from "styled-components"

const IconContainer = ({className, id, disabled, ...props}) => (
    <div className={className} {...props}>
        <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
)


export const Icon = styled(IconContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({size = "24px"}) => size};
    margin: ${({margin = "0"}) => margin};
    cursor: pointer;
    color: ${({disabled}) => disabled ? "#ccc" : "#000"};

    &:hover {
        cursor: pointer;
    }
`

