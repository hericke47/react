import React from "react"
import { Wrapper } from "./styles"

function Button({ as, href, children, type }) {
    return(
        <Wrapper 
            as={as} 
            href={href} 
            type={type}
        >
            {children}
        </Wrapper>
    )
}



export default Button;