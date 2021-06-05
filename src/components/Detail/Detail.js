import styled from 'styled-components'
import {useContext,useLayoutEffect,useState} from 'react'
import {PopulationContext} from '../App'

export const Detail=({gnomeData,isDetailShown})=>{
    const {name,professions,thumbnail,age,friends}=gnomeData
    const [nameState,setNameState]=useState(name)
    const [professionsState,setProfessionsState]=useState(professions)
    const [thumbnailState,setThumbnailState]=useState(thumbnail)
    const [ageState,setAgeState]=useState(age)
    const [friendsState,setFriendsState]=useState(friends)
    const population=useContext(PopulationContext)

    const fetchFriend=friend=>(e)=>{
        const friendGnome=population.find(gnome=>gnome.name===friend)
        const {name,professions,thumbnail,age,friends}=friendGnome
        setNameState(name)
        setProfessionsState(professions)
        setThumbnailState(thumbnail)
        setAgeState(age)
        setFriendsState(friends)
    }

    /**
     * when user closes modal and reopens, we want to see the original data, not friend data
     */
    useLayoutEffect(()=>{
        if(isDetailShown){
            setNameState(name)
            setProfessionsState(professions)
            setThumbnailState(thumbnail)
            setAgeState(age)
            setFriendsState(friends)
        }
    },[isDetailShown,name,professions,thumbnail,age,friends])
    
    return (
        <div>
            <Img src={thumbnailState} alt='gnome pic' />
            <Container>
                <div><strong>name</strong></div>
                <div>{nameState}</div>
                <div><strong>professions</strong></div>
                <div>{professionsState.join(', ')}</div>
                <div><strong>age</strong></div>
                <div>{ageState}</div>
                <div><strong>friends</strong></div>
                <div>
                    {friendsState.map((friend,index)=>{
                        if(index===friends.length-1){
                            return <A key={friend} onClick={fetchFriend(friend)}>{friend}</A>
                        }
                        return <A key={friend} onClick={fetchFriend(friend)}>{friend}<NoUnderline>{',\u00a0'}</NoUnderline></A>
                        })}
                </div>
            </Container>
        </div>
    )
}

const Img=styled.img`
width:600px;
max-width:100%;
width:100%;
height:300px;
border:2px solid black;
border-radius:5px;
`

const Container=styled.div`
display:grid;
grid-template-columns: auto auto;
grid-row-gap:5px;
grid-column-gap:5px;
`

const A=styled.div`
display:inline-block;
text-decoration:underline;
&:hover{
    text-decoration:none;
}
cursor:pointer;
`

const NoUnderline=styled.div`
display:inline-block;
text-decoration:none;
`