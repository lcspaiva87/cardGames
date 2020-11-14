import styled from "styled-components";

const Container = styled.section`
  margin-top: 5vh;
  margin-bottom: 5vh;
  position: relative;
  height: 90vh;

  background: transparent linear-gradient(143deg, #7dede2 0%, #58b790 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;

  max-height: 752px;
`;

const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #0000004d;
  opacity: 1;
  height: 100vh;
  position: absolute;
  top: -40px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  max-width: 1082px;
  width: 100%;
  max-height: 832px;
`;
const Title = styled.h6`
  text-align: center;
  font: normal normal bold 35px/46px Montserrat;
  letter-spacing: -0.88px;
  color: #63c7a9;
  margin: 0;
  margin-top: 82px;
  margin-bottom: 42px;
`;
const SubTitle = styled.p`
  font: normal normal normal 20px/21px Open Sans;
  color: #363636;
  max-width: 756px;
  width: 100%;
  margin: 0;
  margin-bottom: 52px;
`;
const Input = styled.input`
  width: ${(props) => props.width || "231px"};
  height: ${(props) => props.height || "46px"};
  margin-top: ${(props) => props.margintop};
  margin-left: ${(props) => props.marginleft};
  margin-bottom: ${(props) => props.marginbottom};
  padding-top: ${(props) => props.paddingtop};
  padding-left: 16px;
  font: normal normal normal 18px/30px Open Sans;
  color: #363636;
  resize: none;

  &::placeholder {
    color: #363636;
    text-transform: capitalize;
  }

  border: 1px solid #363636;
`;

const BotaoEnviar = styled.button`
  width: 249px;
  height: 48px;
  background: #63c7a9 0% 0% no-repeat padding-box;

  color: #fff;
  border: none;
`;
const ContainerInput = styled.form`
  width: 536px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;


const Form = () => {
  return (
    <Container>
      <Card>
        <Title>FORMULÁRIO</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </SubTitle>

        <ContainerInput>
          <Input placeholder="nome" />
          <Input placeholder="Email" marginleft="30px" />
          <Input
            placeholder="mensagem"
            as="textarea"
            width="100%"
            height="197px"
            margintop="40px"
            marginbottom="49px"
            paddingtop="16px"
          />
          <BotaoEnviar>Enviar</BotaoEnviar>
        </ContainerInput>
      </Card>
    </Container>
  );
};

export default Form;
