import { css  } from "styled-components"

export function Mobile(props)  {
    return css`
        @media only screen and (max-width:380px){
            ${props}
        }
    `
}
