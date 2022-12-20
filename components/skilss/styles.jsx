import styled from "styled-components";

export const Container = styled.div`
  margin: 15% 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Main = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: #fff;
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

export const Content = styled.div`
  width: 90%;
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1070px) {
    width: 450px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 850px) {
    width: 400px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 750px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const Card = styled.div`
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #212121;
  gap: 15px;
`;

export const Title = styled.div`
  margin: 0;
  font-size: 90px;
  text-align: center;
  line-height: 95px;
  font-weight: bold;
  color: #4f4f4f;

  @media (max-width: 850px) {
    svg {
      font-size: 85px;
    }
  }

  @media (max-width: 500px) {
    font-size: 80px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #27ae60;
  font-size: 25px;
  font-weight: 700;
  transition: 100ms;

  &:hover {
    letter-spacing: 5px;
  }

  @media (max-width: 850px) {
    font-size: 25px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
