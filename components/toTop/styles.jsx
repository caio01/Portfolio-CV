import styled from "styled-components";

export const Container = styled.a`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: #38322e;
  border-radius: 65px;
  bottom: 14px;
  box-shadow: 2px 3px 19px -2px rgba(0, 0, 0, 0.75);
  color: #d9a000;
  cursor: pointer;
  height: 40px;
  position: fixed;
  right: 22px;
  width: 40px;
  z-index: 3;
  &::after {
    content: "▲";
    display: flex;
    justify-content: center;
    padding-left: 1px;
    padding-top: 10px;
  }
`;
