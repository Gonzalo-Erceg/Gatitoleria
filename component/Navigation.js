import { backgrounds } from "../styles/colors/theme"
import { Gatito, GithubIcon } from "../styles/icons" 
import  Head  from "next/head"
import Link from "next/link"
import * as React from "react"
export default function Navigation () {



    return(
        <>
        <Head>
            
            <link href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap" rel="stylesheet"></link>
        </Head>
        <nav>
            
            <Link href="/">
            
            <a>
            <div><Gatito width={75}/>
            <h1>Gatitoleria</h1>
            </div></a>
            
            </Link>
            
            <a href="https://github.com/Gonzalo-Erceg/" target="__BLANK"><GithubIcon/></a>
        </nav>
        <style jsx>
            {`
            nav{
                background:${backgrounds[0]};
                padding:10px 5px;
                border-bottom:1px solid ${backgrounds[3]};
                display:flex;
                align-items:center;
                justify-content:space-between
                }
            div{
                display:flex;
                align-items:center
            }
            h1{
                margin:0;
                font-family: 'Yatra One', cursive;
            }
            `}
        </style>
        </>
    )
}