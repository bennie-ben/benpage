import React from 'react';
import styled from 'styled-components';

const FirstDiv = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    place-items:center center;
    
`
const Greeting = styled.p`
    font-size:40px;
    font-weight:100;
    grid-column : -1/1;

`
const Div = styled.div`
    padding:10px;
`
const Span = styled.div`
    padding:10px;
`

const Item = ({text}) => {
    return(
        <Div>
            <Span>
                <p>{text}</p>
            </Span>
        </Div>
    )
}

export default ({text})=>{
    return(
        <FirstDiv>
            <Greeting greeting={true}>HELLO</Greeting>
            <Item text={text}/>
            <Item text={text}/>
            <Item text={text}/>
        </FirstDiv>
    )
}