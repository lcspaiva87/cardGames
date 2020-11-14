import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../img/left-arrow.svg';
import arrowRigth from '../img/right-arrow.svg';
import grandImg from '../img/Grant.png';
import femeImg from '../img/Red.png';
import sylbilImg from '../img/Sybil_2.png';
const Background = styled.section`
    padding-top: 300px;
    background: #363636 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const  Cashier = styled.div`
    width: 387px;
    height: 613px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFFFFF63;
    border-radius: 27px;
    opacity: 1;
    padding: 10px;
    margin-left: 36px;
    display: flex;
    margin-top: 28px;
    margin: 52px;
`;
const Arrow = styled.img`
    height: 69px;
    width: 89px;
    

`;
const Container =styled.div`
    display:flex;
`;
const Grand = styled.img.attrs({src:grandImg})`
    width: 379px;
    height: 527px;
    position: absolute;
    top: -102px;
    left: -16px;

`;
 const BackgroundImg=styled.div`
    width: 369px;
    height: 415px;
    box-shadow: 0px 3px 6px #FF060629;
    border-radius: 99px;
    opacity: 1;
    background-color: #363636;
    position: relative;
    top: -190px;
    padding: 0px 0px 0px 0px;
    border: solid #fff;
 
 `;
const Text = styled.h6`
        left: 23px;
        width: 326px;
        height: 153px;
        text-align: left;
        font: normal normal normal 20px/25px Open Sans;
        color: #363636;
        opacity: 1;
        display: flex;
        position: absolute;
        top: 475px;
    `;

const FemeImg = styled.img.attrs({src:femeImg})`
        width: 379px;
        height: 527px;
        position: absolute;
        top: -102px;
        left: -16px;
    `;


const SylbilImg = styled.img.attrs({src:sylbilImg})`
            width: 379px;
            height: 527px;
            position: absolute;
            top: -102px;
            left: -16px;
    `;

const Slide=()=>{
    return(
        <Background>
                <Arrow src={arrowLeft}/>
                <Cashier>
                    <BackgroundImg>
                            <Grand/>
                            <Text> A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.</Text>
                    </BackgroundImg>
                </Cashier>
                <Cashier>
                    <BackgroundImg>
                        <FemeImg/>
                        <Text>Red, uma jovem cantora, entrou em posse do Transistor. 
                            Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor 
                            e está perseguindo implacavelmente a sua procura.</Text>
                    </BackgroundImg>
                </Cashier>
                <Cashier>
                    <BackgroundImg>
                        <SylbilImg/>
                        <Text>
                        Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.
                        </Text>
                    </BackgroundImg>
                </Cashier>
                <Arrow src={arrowRigth}/>
        </Background>
    );
}


export default Slide;