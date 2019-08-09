import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.header`
    display : grid;
    grid-template-flow: row;
`
const SLink = styled(Link)`
    text-decoration:none;
    color:black;
    border-bottom: 2px solid ${props=>props.correct ? "black" : "transparent"}
    transition:border-bottom.4s ease-in-out;
    `

function Headers({location:{pathname}}){
    return(
        <Header>
            <SLink correct={pathname==="/"}to="/">Home</SLink>
            <SLink correct={pathname==="/comment"}to="/comment">Comment</SLink>
            <SLink correct={pathname==="/about"}to="/about">About</SLink>
            <SLink correct={pathname==="/profile"}to="/profile">Profile</SLink>
        </Header>
    )
}

export default withRouter(Headers);

