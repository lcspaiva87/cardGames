import React from 'react';
import styled from 'styled-components';
import Foguete from '../img/Imagem 3.png';

const Container = styled.header`
display:flex;
justify-content:center;
max-height:min-content;

`;



const Title = styled.span`
color:#fff;
text-transform: uppercase;
opacity: 1;
text-align: left;
margin-top: 38px;
margin-bottom: 26px;
font: normal normal bold 23px/36px Montserrat;
letter-spacing: 0.68px;
font-size: 22px;
`;


const Header=()=>{
    return(
        <Container id="header">
            <img src={Foguete}/>
            <Title>
                SuperGiantGames
            </Title>
        </Container>
    )

}

export default Header;