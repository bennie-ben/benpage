import React from 'react';
import styled from 'styled-components';


const FirstDiv = styled.div`
    display:${props => props.greeting ? "grid" : "none"};
    gird-tempalte-flow:column;
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
    border-top: 1px #fa8282 solid;
`

export default ()=>{
    return(
        <FirstDiv greeting={ true }>
            <Greeting>About</Greeting>
            <p>I know this looks shit but deal with it.</p>
            <p>This is Ben</p>
            <p>I know this looks shit but deal with it.</p>
            <p>I know this looks shit but deal with it.</p>
            <p>24 Years Old</p>
            <p>I know this looks shit but deal with it.</p>
            <p>I know this looks shit but deal with it.</p>
            <p>I know this looks shit but deal with it.</p>
            <p>I know this looks shit but deal with it.</p>
            <p>I know this looks shit but deal with it.</p>
            <p>I know this looks shit but deal with it.</p>
            <p>I know this looks shit but deal with it.</p>
        </FirstDiv>
    )
}