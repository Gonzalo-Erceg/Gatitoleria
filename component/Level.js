
import * as React from "react"
const handleLevel =[
    "0%",
    "20%",
    "40%",
    "60%",
    "80%",
    "100%"

]
import { turquesa } from "../styles/colors/theme"

export const Level = (props)=>{


    return(
        <>
        
        <div className="container">
            
            <div className="level">{props.level}/5</div>
        </div>
        
        <style jsx>

            {`
            .container{
                width:100%;
                height:100%
            }
            .level{
                background:${turquesa[props.level]};
                height:100%;
                width:${handleLevel[props.level]}
            }
            `}
        </style>
        </>
    )
}