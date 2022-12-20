import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2%;
  height: 85vh;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: start;
  margin-bottom: 5%;

  @media (max-width: 900px) {
    margin-top: 10%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    margin-bottom: 0;
  }

  @media (max-width: 550px) {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    margin-top: 20%;
    margin-bottom: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  @media (max-width: 900px) {
    margin-bottom: 10%;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 0px;
  margin-bottom: 5%;

  @media (max-width: 550px) {
    text-align: center;
  }

  @media (max-width: 350px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #828282;
  font-size: 18px;
  margin-bottom: 4%;
  user-select: none;

  @media (max-width: 550px) {
    font-size: 23px;
  }

  @media (max-width: 350px) {
    font-size: 15px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #27ae60;
    transform: translateY(-0.25em);
  }

  @media (max-width: 685px) {
    width: 200px;
    font-size: 18px;
  }

  @media (max-width: 550px) {
    width: 250px;
    font-size: 18px;
  }

  @media (max-width: 350px) {
    width: 150px;
    font-size: 15px;
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

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em #fff;
    transform: translateY(-0.25em);
  }

  @media (max-width: 685px) {
    width: 200px;
    font-size: 18px;
  }

  @media (max-width: 550px) {
    width: 250px;
    font-size: 18px;
  }

  @media (max-width: 350px) {
    width: 150px;
    font-size: 15px;
  }
`;

export const Span = styled.span`
  position: relative;
  text-align: center;
  top: 3px;
  left: -25px;
`;

export const Image = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
