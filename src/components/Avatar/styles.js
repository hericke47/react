import styled, { css } from "styled-components"

export const Img = styled.img`
    border-radius:50%;
    object-fit: cover;

    ${({ size }) => {
        if (size){
            return css`
                width: ${size}px;
                height: ${size}px;
            `
        }
        return css`
            width:100%;
        `
    }}
`

