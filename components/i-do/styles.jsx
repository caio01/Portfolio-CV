import styled from "styled-components";

export const Geral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 75px;

  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 75px;
  }
`;

export const Title = styled.h4`
  user-select: none;
  color: #fff;
  margin-top: 15%;
  margin-bottom: 5%;
  color: #fff;
  font-size: 50px;
  align-items: center;
  font-weight: bold;

  @media (max-width: 450px) {
    font-size: 40px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }

  @media (max-width: 300px) {
    font-size: 25px;
  }

  @media (max-width: 250px) {
    font-size: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 250px;
  background-color: #212121;
  border-bottom: 5px solid #171717;

  &:hover {
    transition: 150ms;
    border-bottom: 5px solid #27ae60;
  }

  @media (max-width: 1070px) {
    width: 450px;
  }

  @media (max-width: 850px) {
    width: 400px;
  }

  @media (max-width: 750px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const Text = styled.p`
  color: #646464;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 5%;
  margin-left: 5%;
  line-height: 50px;


  @media (max-width: 400px) {
    font-size: 35px;
  }
`;

export const Text2 = styled.p`
  color: #646464;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0%;
  margin-left: 5%;
  line-height: 50px;
`;

export const Content = styled.div``;

export const Icon = styled.img`
  margin-top: 30px;
  margin-left: 15px;
  width: 20%;
`;
