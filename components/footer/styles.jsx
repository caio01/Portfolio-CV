import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #4f4f4f;
  transition: 100ms;
  user-drag: none;

  &:hover {
    color: #27ae60;
  }
`;
