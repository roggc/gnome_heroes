import styled from 'styled-components'
import {useEffect,useState,createContext} from 'react'
import {GnomeCard} from '../GnomeCard'
import {Modal} from '../Modal'
import {Filters} from '../Filters'

const jsonUrl='https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
export const PopulationContext=createContext()

export const App=() =>{

  const [isFiltersShown,setIsFiltersShown]=useState(false)
  const [populationWithoutFiltering,setPopulationWithoutFiltering]=useState([])
  const [population,setPopulation]=useState([])
  const [nameFilter,setNameFilter]=useState('')
  const [professions,setProfessions]=useState([])
  const [isFetching,setIsFetching]=useState(false)

  /**
   * we fetch data from json url
   */
  useEffect(()=>{
    setIsFetching(true)
    const fetchData= async ()=>{
      const response= await fetch(jsonUrl)
      const data=await response.json()
      setPopulation(data.Brastlewark)
      setPopulationWithoutFiltering(data.Brastlewark)
      setIsFetching(false)
    }
    fetchData()
  },[])

  const toggleFiltersModal=()=>{
    setIsFiltersShown(isFiltersShown=>!isFiltersShown)
  }

  /**
   * this changes population on change of nameFilter
   */
  useEffect(()=>{
    let filteredPopulation=populationWithoutFiltering
    if(nameFilter.length){
      filteredPopulation=filteredPopulation.filter(gnome=>gnome.name.indexOf(nameFilter)>-1)
    }
    filteredPopulation=filteredPopulation.filter(gnome=>{
      if(!professions.find(profession=>profession.selected)){
        return true
      }
      let condition= true
      professions.some(profes=>{
        if(profes.selected){
          if(!gnome.professions.find(profession=>profession===profes.name)){
            condition=false
            return true
          }
        }
        return false
      })
      return condition
    })
    setPopulation(filteredPopulation)
  },[nameFilter,populationWithoutFiltering,professions])

  /**
   * this sets the array of diferent professions, used in filtering
   */
  useEffect(()=>{
    const _professions=[]
    populationWithoutFiltering.forEach(gnome=>{
      gnome.professions.forEach(profession=>{
        if(!_professions.find(_profession=>_profession.name===profession)){
          _professions.push({name:profession,selected:false})
        }
      })
    })
    setProfessions(_professions)
  },[populationWithoutFiltering])

  return (
    <PopulationContext.Provider value={populationWithoutFiltering}>
    <Div>
      <div>
        <Button onClick={toggleFiltersModal} />
        <Modal isShown={isFiltersShown} setIsShown={setIsFiltersShown}>
          <Filters setNameFilter={setNameFilter} professions={professions} setProfessions={setProfessions} />
        </Modal>
      </div>
      {isFetching?<div>loading data...</div>:
      population.length?
      <GnomePopulationContainer>
        {population.map(gnome=><GnomeCard gnomeData={gnome} key={gnome.name} />)}
      </GnomePopulationContainer>
      :null
      }
    </Div>
    </PopulationContext.Provider>
  )
}

const Div=styled.div`
font-family:sans-serif;
`

const GnomePopulationContainer=styled.div`
height:600px;
overflow-y:auto;
border-radius:5px;
border:1px solid black;
float:left;
`

const Button=styled.button`
border-radius:50%;
border:1px solid black;
background-color:cornflowerblue;
width:30px;
height:30px;
cursor:pointer;
`
