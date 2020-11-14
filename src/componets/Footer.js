import styled from "styled-components";
import UpArrow from "../img/up-arrow.svg";
const Wrapper = styled.footer`
  background-color: #363636;
  height: 410px;
  display: flex;
`;
const ButtonUp = styled.a`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 107px;
  height: 107px;
  margin-left: auto;
  margin-right: 143px;
  border-radius: 50%;
  margin-top: 55px;
  img {
    width: 34px;
    height: 42px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <ButtonUp href="#header">
        {" "}
        <img src={UpArrow} />{" "}
      </ButtonUp>
    </Wrapper>
  );
};

export default Footer;
