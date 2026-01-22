import styled from "styled-components"
import { forwardRef } from "react"

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
    return <input className={className} {...props} ref={ref}/>
})

export const Input = styled(InputContainer)`
    width: ${({ width = '100%' }) => width}
    height: 40px;
    margin: 0px 0px 10px;
    padding: 10px;
    font-size: 18px;
    boder: 1px solid #000;
`