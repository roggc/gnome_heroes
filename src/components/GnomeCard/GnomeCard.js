import styled from 'styled-components'
import {useMemo,useState} from 'react'
import {Modal} from '../Modal'
import {Detail} from '../Detail'

const MAX_NUMBER_OF_CHARACTERS=21

/**
 * this renders a card with gnome information
 * @param {*} props 
 * @returns {JSX.Element}
 */
export const GnomeCard=({gnomeData})=>{

    const {thumbnail,name,professions}=gnomeData
    const [isDetailShown,setIsDetailShown]=useState(false)

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

    /**
     * this opens the modal with the details of the gnome
     */
    const showDetail=()=>{
        setIsDetailShown(true)
    }

    return <Div onClick={showDetail}>
        <Img src={thumbnail} alt='gnome pic' />
        <P>{name}</P>
        <P>{professionsTxt}</P>
        <Modal isShown={isDetailShown} setIsShown={setIsDetailShown}>
            <Detail gnomeData={gnomeData} isDetailShown={isDetailShown} />
        </Modal>
    </Div>
}

const Div=styled.div`
border-radius:5px;
float:left;
margin:5px;
box-shadow:0 0 1px 1px;
padding:3px;
cursor:pointer;
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