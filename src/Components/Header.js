import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.header`
    display : grid;
    grid-template-columns:repeat(10,1fr);
    place-items:center center;
`
const SLink = styled(Link)`
    color:#252525;
    display:grid-block;
    text-decoration:none;
    padding-bottom:5px;
    border-bottom: 1px solid ${props=>props.correct ? "#fa8282" : "transparent"}
    transition:border-bottom.4s ease-in-out;
    `

function Headers({location:{pathname}}){
    return(
        <Header>
            <SLink correct={pathname==="/"}to="/">Home</SLink>
            <SLink correct={pathname==="/about"}to="/about">About</SLink>
            <SLink correct={pathname==="/profile"}to="/profile">Profile</SLink>
            <SLink correct={pathname==="/comment"}to="/comment">Comment</SLink>
        </Header>
    )
}

export default withRouter(Headers);

