import {useEffect,useState} from "react" 
import { turquesa } from "../styles/colors/theme"
import * as React from "react"


export const ImageRandom=()=>{
    const [controller, setController] = useState(0)
    const [type, setType] = useState("gif")
    const [info,setInfo] =useState(null)
   useEffect(()=>{

    fetch(`https://api.thecatapi.com/v1/images/search?api_key=64bec5e8-8eb3-452e-a881-fc8fa5cc1f67&mime_types=${type}`).then(res=>res.json())
    .then(res=>{

        setInfo(res[0])
        console.log(res[0])
    })

   },[controller])
    
   const handleController = ()=>{

        const newValue = controller===0? 1:0;
        setController(newValue)

   }

   const handleSubmit = (e)=>{
       e.preventDefault()
       const {select} = e.target
       setType(select.value)
    
        handleController()

    }
    return(
        <>
        
        <div className="container">
        <h2>Image Random</h2>
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <select name="select">
                    <option value="gif">Gif</option>
                    <option value="jpg,png">Image JPG</option>
                </select>
                <button>Refresh</button>
            </form>
        </div>

            <div className="image">
            
            </div>
        </div>
        
        
        
        <style jsx>{`
            @font-face{
                font-family: 'Varela Round';
                src:url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap")
            }
            .container{
                display:flex;
                flex-direction:column;
                align-items:center;
                overflow-x:auto;
                overflow-y:auto;
                width:inherit;
                height:600px;
                text-align:center
            }
            .image{
                background-image:url(${info && info.url});
                width:${info && info.width}px;
                height:${info && info.height}px;
                object-fit: scale-down;
                background-position: center center;
                
            }
            .formulario{
                margin-bottom:50px
            }
           h2{
               font-family:'Varela Round'
           }
            button{
                outline:1px solid #ccc;
                border:none;
                padding:10px 20px;
            }
            button:hover{
                outline:1px dashed ${turquesa[5]};
                
                cursor:pointer;}
            select{
                width:200px;
                padding:10px 20px;
                outline:none;
               border-image:none;
                border:1px solid #ccc;
                background:transparent
            }    
            
            `}</style>
        </>
    )
}