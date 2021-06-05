import styled from 'styled-components'
import {useState} from 'react'

export const Filters=({setNameFilter,professions,setProfessions})=>{

    const [checked,setChecked]=useState(professions.map(profession=>false))

    const _setNameFilter=(e)=>{
        setNameFilter(e.target.value)
    }

    const toggleCheckbox=(index,name)=>(e)=>{
        setChecked(checked=>{
            const newChecked=[...checked]
            newChecked[index]=!newChecked[index]
            return newChecked
        })
        const newProfessions=[...professions]
        newProfessions.some(profession=>{
            if(profession.name===name){
                profession.selected=!profession.selected
                return true
            }
            return false
        })
        setProfessions(newProfessions)
    }

    return <div>
        <NameContainer>
            <div><strong>name</strong></div>
            <Input type='text' onChange={_setNameFilter} />
        </NameContainer>
        <ProfessionContainer>
            <div><strong>profession</strong></div>
            {/* <select>
                {professions.map(profession=><option key={profession} value={profession}>{profession}</option>)}
            </select> */}
            <div>
                {professions.map((profession,index)=>
                    <CheckboxContainer key={profession.name}>
                        <input type='checkbox' value={profession.name} onChange={toggleCheckbox(index,profession.name)} checked={checked[index]} />
                        <label>{profession.name}</label>
                    </CheckboxContainer>
                )}
            </div>
        </ProfessionContainer>
    </div>
}

const NameContainer=styled.div`
display:flex;
`

const Input=styled.input`
border-radius:5px;
border:1px solid black;
height:20px;
`

const ProfessionContainer=styled.div`
display:flex;
`

const CheckboxContainer=styled.div`
display:flex;
float:left;
`