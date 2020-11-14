import React from 'react';
import styled from 'styled-components';

import Background from '../img/background.png';
import BackgorundCard from '../img/card.svg';
import cardbackground from '../img/femeCard.png';

import featherImg from '../img/pena.png';

const Container = styled.section`
height: calc(100vh - 109px);
width:100vw;
background-image:url(${Background});
display:flex;
justify-content:center;
`;
const Wrapper = styled.div`
   background-color: #770d1078;
    width:100%;
    max-width:586px;
    height:94%;
    display: flex;
    justify-content: center;
    padding-top: 54px;
    
`;
const Card = styled.div`
    background-image:url(${cardbackground});
    flex: 1;
    max-height: 754px;
    max-width: 526px;
    position: relative;
`;
const FeatherOne = styled.img.attrs({src:featherImg})`
       position: absolute;
    left: -99px;
    -ms-transform: rotate(-3deg);
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    height: 119px;
    width: 185px;
    top: 354px;
`;

const Home=()=>{
    return(   
        <Container>
            <Wrapper>
                <Card>
                    <FeatherOne/>                  
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Home;