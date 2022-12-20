import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;

  @media (max-width: 850px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 75px;
    margin-top: 7%;
  }
`;

export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircleLarge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #212121;

  @media screen and (max-width: 750px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (max-width: 400px) {
    width: 65px;
    height: 65px;
  }
`;

export const Circlemini = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #27ae60;
  transition: 1500ms;

  &:hover {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 750px) {
    width: 25px;
    height: 25px;
  }
`;

export const Circlemini1 = styled.div`
  visibility: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  &:hover {
    width: 25%;
    height: 25%;
    background-color: #212121;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 750px) {
    font-size: 20px;
  }

  @media screen and (max-width: 400px) {
    font-size: 19px;
  }
`;

export const Title = styled.p`
  user-select: none;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1px;

  @media (max-width: 750px) {
    margin-bottom: 3px;
  }
`;

export const Subtitle = styled.p`
  color: #fff;
  margin: 0;

  @media (max-width: 300px) {
    font-size: 18px;
  }

  @media (max-width: 270px) {
    font-size: 17px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: 100ms;

  &:hover {
    color: #27ae60;
  }

  @media (max-width: 300px) {
    font-size: 18px;
  }

  @media (max-width: 270px) {
    font-size: 17px;
  }
`;
