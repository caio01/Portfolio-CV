import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4%;
`;

export const Title = styled.h4`
  user-select: none;
  color: #fff;
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

export const Text = styled.p`
  width: 75%;
  color: #fff;
  text-align: center;
  font-size: 20px;
`;
