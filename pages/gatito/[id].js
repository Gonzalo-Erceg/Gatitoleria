import {useRouter} from "next/router"
import {useEffect,useState} from "react"
import { backgrounds, turquesa } from "../../styles/colors/theme" 
import Navigation from "../component/Navigation"
import Head from "next/head"
import { Level } from "../component/Level"


export default function Gato(props){
    const router = useRouter()
    const {id} = router.query
    const [info,setInfo] = useState(props.obj)

    console.log(info)
    

    return(
        <>
        <Head>
            <title>{info[0].breeds[0].name}</title>
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
        </Head>
        <Navigation/>
        <div className="contenedor">
        <div className="info">
            <h2>{info[0].breeds[0].name}</h2>
            <span>{info[0].breeds[0].description}</span>
            <div>
                <div>
                    <span>adaptability</span>
                    <div className="level"><Level level={info[0].breeds[0].adaptability}/></div>
                    
                </div>
                <div>
                    <span>affection level</span>
                    <div className="level"><Level level={info[0].breeds[0].affection_level}/></div>
                </div>
                <div>
                    <span>dog friendly</span>
                    <div className="level"><Level level={info[0].breeds[0].dog_friendly}/></div>
                </div>
                <div>
                    <span>energy level</span>
                    <div className="level"><Level level={info[0].breeds[0].energy_level}/></div>
                </div>
                <div>
                    <span>child friendly</span>
                    <div className="level"><Level level={info[0].breeds[0].child_friendly}/></div>
                </div>
                <div>
                    <span>grooming</span>
                    <div className="level"><Level level={info[0].breeds[0].grooming}/></div>
                </div>
                <div>
                    <span>intelligence</span>
                    <div className="level"><Level level={info[0].breeds[0].intelligence}/></div>
                </div>
                <div>
                    <span>shedding level</span>
                    <div className="level"><Level level={info[0].breeds[0].shedding_level}/></div>
                </div>
                <div>
                    <span>social needs</span>
                    <div className="level"><Level level={info[0].breeds[0].social_needs}/></div>
                </div>
                <div>
                    <span>stranger friendly</span>
                    <div className="level"><Level level={info[0].breeds[0].stranger_friendly}/></div>
                </div>
                <div>
                    <span>life span: {info[0].breeds[0].life_span} years </span>
                </div>
            </div>
            <span>temperament: {info[0].breeds[0].temperament}</span>
            <div className="wiki">
            More information on  <a href={info[0].breeds[0].wikipedia_url} target="__BLANK">WiKipedia</a>
            </div>
        </div>
        <ul>
        {info && info.map((i,id)=><li key={id}><img   src={i.url}/></li>)}
        </ul>
        </div>
        <style jsx>
            {`
            .contenedor{
                background:${backgrounds[0]};
                 width:100%;
                min-height:100vh;
                margin:auto;
                padding:15vh 20px    
                }
            .info{
                text-align:center
            }
            .info div{
                margin-bottom:15px
            }
            .info div div{
                font-weight:600
            }
            .level{
                width:50%;
                height:20px;
                border:1px solid #ccc;
                margin:auto
            }
            .wiki{
                border:1px solid #ccc
            }
            .wiki a{
                text-decoration: underline 
            }
            .wiki a:hover{
                color:${turquesa[3]}
            }
            img{
                width:200px;
                height:auto
            }
            ul{
                display:flex;
                 flex-wrap:wrap;
                gap:20px;
                margin:auto;
                flex-basis:200px;
                justify-content:center;
                padding:0
                }
            li{
                list-style:none
            }
            h2,span{
                font-family: 'Varela Round', sans-serif;
            }
            @media (min-width: 700px){
                .contenedor{
                    width:90%
                }
        
     }
            `}
        </style>
        </>
    )

}

export async function getServerSideProps(context) {

    const {params}= context
    const {id} = params;
    const apiResponse = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=64bec5e8-8eb3-452e-a881-fc8fa5cc1f67&breed_ids=${id}&limit=20`);
    const arr = await apiResponse.json();
    const props = {obj:arr}
    return {props:props}
  }