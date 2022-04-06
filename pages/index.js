import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { backgrounds, turquesa } from '../styles/colors/theme'
import {useEffect,useState} from "react"
import Navigation from '../component/Navigation'
import { Patita } from '../styles/icons'
import { ImageRandom } from '../component/ImageRandom'


const handleScroll = ()=>{
  window.scrollTo({top:0,behavior: 'smooth'})
}

export default function Home(props) {


  const info = props.obj

  return (
    <>
    <Head>
            <title>Gatitoleria</title>
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
        </Head>
    <Navigation/>
   <div className='contenedor' >
    <div className='imagerandom'>

    <ImageRandom/>
    </div>



   <button className='buttonUp' onClick={handleScroll}><Patita width={75}/></button>
   <h2>Species</h2>
   <ul>
   {info && info.map(i=>{

    const imageUrl = i.image ? i.image.url : null;
    
    return(<li key={i.id}>
   
      <Link href={`/gatito/${i.id}`}>
      <a>
      
        
      <h2>{i.name} </h2>
      {imageUrl ? <img src={imageUrl}/>:<span>image not found</span>}
      
        
      
      </a>
      </Link>
      </li>)
      
   })} 

   </ul>
        
      
      
   </div>
   <style jsx>
     {`
     .contenedor{
       background:${backgrounds[0]};
       width:100%;
       min-height:100vh;
       margin:auto;
      padding-top:100px;
      padding-bottom:100px;
      position:relative;
      text-align:center
       
     }
     button{
       outline:none;
       border:none;
       padding:none;
        background:transparent
     }
     button:hover{
       cursor:pointer
     }
     .buttonUp{
      position: fixed;
       outline:1px solid  ${turquesa[2]};
       background: ${turquesa[2]};
      bottom:20px;
      right:20px;
      border-radius:100px;
      padding:5px

     }
     ul{
       display:flex;
       flex-wrap:wrap;
       gap:20px;
       margin:auto;
     
       justify-content:center;
       padding:0
     }
     h2{
       margin:0;
       font-family: 'Varela Round', sans-serif;
     }
     li{
       list-style:none;
       width:150px;
       padding:5px;
       box-shadow:0px 2px 3px 1px black;
       background:${backgrounds[1]}
      
     }
     li:hover{
      background:${backgrounds[3]}
     }
     img{
       width:100%;
       height:auto
     }
     .imagerandom{
       margin-bottom: 100px 
     }



     @media (min-width: 700px){
       .contenedor{
         width:90%
       }
       li{
         width:200px
       }
     }
     `}
   </style>
   </>
  )
}


export async function getStaticProps(context) {
  const apiResponse = await fetch("https://api.thecatapi.com/v1/breeds");
  const arr = await apiResponse.json();
  const props = {obj:arr}
  return {props:props}
}