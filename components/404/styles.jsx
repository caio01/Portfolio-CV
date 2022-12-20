import styled from "styled-components";

export const Main = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 97vh;
`;

export const Title = styled.h2`
  font-family: "Inter";
  color: #27ae60;
  font-weight: bold;
  font-size: 10rem;
  margin: 0;
  text-shadow: rgba(39, 174, 96, 0.5) 0px 0px 50px;

  @media (max-width: 300px) {
    font-size: 5rem;
    letter-spacing: 0px;
  }
`;

export const Text = styled.p`
  font-family: "Inter";
  color: #fff;
  font-size: 1.5rem;

  @media (max-width: 450px) {
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }

  @media (max-width: 250px) {
    font-size: 0.7rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
export const Button1 = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  width: 100px;
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

  @media (max-width: 300px) {
    width: 200px;
    font-size: 18px;
  }

  @media (max-width: 250px) {
    width: 150px;
    font-size: 18px;
  }
`;

export const Button2 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  text-decoration: none;
  text-align: center;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  padding: 12px 25px;
  // border-radius: 5px;
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

  @media (max-width: 300px) {
    width: 200px;
    font-size: 18px;
  }

  @media (max-width: 250px) {
    width: 150px;
    font-size: 18px;
  }
`;
