import styled from "styled-components";

let breakpointTablet = "1000px";
let breakpointMobile = "650px";

export const Main = styled.div`
  font-family: "DM Sans";
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 5%;
`;

export const Content = styled.div`
  position: relative;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    right: 30px;
  }
`;

export const Card = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  padding: 10px 0 15px 0;
  box-shadow: 8px 5px 22px 5px rgba(0, 0, 0, 0.25);
  border: 2px solid #212121;
  transition: 0.5s;

  &:hover {
    border-color: #27ae60;
    transition: 0.5s;
    box-shadow: 0px 0px 22px 0px rgba(39, 174, 96, 0.25);
    transform: translateY(-0.5em);
  }

  @media (max-width: ${breakpointMobile}) {
    padding: 10px 10px 20px 10px;
  }

  @media (max-width: 350px) {
    width: 200px;
  }
`;

export const Image = styled.img`
  height: 130px;
  transition: 0.5s;
  background: transparent;

  &:hover {
    transform: translateY(-0.25em);
  }
`;

export const UL = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  row-gap: 50px;
  column-gap: 125px;

  @media (max-width: ${breakpointTablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpointMobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Buttons = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 15px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
export const Button1 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  width: 50%;
  text-align: center;
  border: 1px solid #27ae60;
  padding: 12px 25px;
  background-color: #27ae60;
  transition: 100ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #27ae60;
    transform: translateY(-0.25em);
  }

  @media (max-width: 550px) {
    width: 250px;
    font-size: 18px;
  }

  @media (max-width: 375px) {
    width: 150px;
  }

  @media (max-width: 350px) {
    width: 120px;
  }
`;

export const Button2 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-decoration: none;
  text-align: center;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  padding: 12px 25px;
  transition: 100ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #fff;
    transform: translateY(-0.25em);
  }

  @media (max-width: 550px) {
    width: 250px;
    font-size: 18px;
  }

  @media (max-width: 375px) {
    width: 150px;
  }

  @media (max-width: 350px) {
    width: 120px;
  }
`;
