import styled from 'styled-components'

export const Modal=({children,isShown,setIsShown})=>{

    const closeModal=(e)=>{
        e.stopPropagation()
        setIsShown(false)
    }

    const doNothing=(e)=>{
        e.stopPropagation()
    }

    return (
        <Div isShown={isShown} onClick={closeModal}>
            <ContentContainer onClick={doNothing}>
            {children}
            </ContentContainer>
        </Div>
    )
}

const Div=styled.div`
${({isShown})=>`
${isShown?'':'display:none;'}
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
cursor:pointer;
`}
`

const ContentContainer=styled.div`
background-color: #fefefe;
margin: 15% auto; /* 15% from the top and centered */
padding: 20px;
border: 1px solid #888;
width: fit-content; 
max-width:80%;
border-radius:5px;
border:2px solid black;
cursor:initial;
`