import styled from 'styled-components'
import {useState} from 'react'

/**
 * this renders the filters
 * @param {*} props 
 * @returns {JSX.Element}
 */
export const Filters=({setNameFilter,professions,setProfessions})=>{

    const [checked,setChecked]=useState(professions.map(profession=>false))

    const _setNameFilter=(e)=>{
        setNameFilter(e.target.value)
    }

    /**
     * this checks/unchecks the checkbox and selects/deselects the profession for the filtering
     * @param {number} index 
     * @param {string} name 
     * @returns 
     */
    const toggleCheckbox=(index,name)=>(e)=>{
        setChecked(checked=>{
            const newChecked=[...checked]
            newChecked[index]=!newChecked[index]
            return newChecked
        })
        // I put this here and not in the callback because when using a callback in setProfessions it is called twice, I don't 
        // know why
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

    return (
        <Div>
            <div><strong>name</strong></div>
            <Input type='text' onChange={_setNameFilter} />
            <div><strong>profession</strong></div>
            <div>
                {professions.map((profession,index)=>
                    <CheckboxContainer key={profession.name}>
                        <input type='checkbox' onChange={toggleCheckbox(index,profession.name)} checked={checked[index]??false} />
                        <label>{profession.name}</label>
                    </CheckboxContainer>
                )}
            </div>
        </Div>
    )
}

const Div=styled.div`
display:grid;
grid-template-columns: auto auto;
grid-row-gap:5px;
`

const Input=styled.input`
border-radius:5px;
border:1px solid black;
height:30px;
`

const CheckboxContainer=styled.div`
display:flex;
float:left;
`