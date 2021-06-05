import styled from 'styled-components'

export const Detail=({gnomeData})=>{
    const {name,professions,thumbnail,age,friends}=gnomeData
    console.log(gnomeData)
    return (
        <div>
            <Img src={thumbnail} alt='gnome pic' />
            <Container>
                <div><strong>name</strong></div>
                <div>{name}</div>
                <div><strong>professions</strong></div>
                <div>{professions.join(', ')}</div>
                <div><strong>age</strong></div>
                <div>{age}</div>
                <div><strong>friends</strong></div>
                <div>{friends.join(', ')}</div>
            </Container>
        </div>
    )
}

const Img=styled.img`
width:600px;
max-width:100%;
min-width:600px;
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