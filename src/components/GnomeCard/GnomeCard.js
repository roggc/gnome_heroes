import styled from 'styled-components'
import {useMemo} from 'react'

const MAX_NUMBER_OF_CHARACTERS=21

export const GnomeCard=({gnomeData})=>{
    const {thumbnail,name,professions}=gnomeData

    const professionsTxt=useMemo(()=>{
        let tempTxt=professions.join(', ')
        if(tempTxt.length>MAX_NUMBER_OF_CHARACTERS){
            tempTxt=tempTxt.substr(0,MAX_NUMBER_OF_CHARACTERS)+'...'
        }
        if(tempTxt.length===0){
            tempTxt='\u00a0'
        }
        return tempTxt
    },[professions])

    return <Div>
        <Img src={thumbnail} alt='gnome pic' />
        <P>{name}</P>
        <P>{professionsTxt}</P>
    </Div>
}

const Div=styled.div`
border-radius:5px;
float:left;
--max-width:200px;
margin:5px;
box-shadow:0 0 1px 1px;
padding:3px;
cursor:pointer;¡
`

const Img=styled.img`
border-radius:5px;
border:2px solid black;
height:100px;
width:200px;
`

const P=styled.p`
max-width:200px;
`