import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Footer = styled.footer`
`
const Copyright = styled.div`
    display : grid;
    place-items : flex-end flex-start;

`
const Wrapper = styled.div`
    display : grid;
`
const TextContainer = styled.div`
    display : grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
    grid-auto-rows : 200px;
    margin-bottom : 0px;
`
const Follow = styled.div`
    display : grid;
    place-items : center center;
`
const Contact = styled.div`
    display : grid;
    place-items : center center;
`

const Mark = styled.div`
    display : grid;
    place-items : center center;
`
const Text = styled.p`
    font-weight : 400;
`

export default () => {
    return(
        <Footer>
            <Wrapper>
                <TextContainer>
                    <Contact>
                        <p>Contact Here</p>
                    </Contact>
                    <Mark>
                        <p>Image comming soon</p>
                    </Mark>
                    <Follow>
                        <p>Sometnihing</p>
                    </Follow>
                </TextContainer>
                <Copyright>
                    <Text>Copyright&copy;{new Date().getFullYear()}</Text>
                </Copyright>
            </Wrapper>
        </Footer>
    )
}