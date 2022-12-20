import styled, { css } from "styled-components";

export const Container = styled.section`
  text-decoration: none;
  color: #fff;
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(39, 174, 96);
  background: linear-gradient(
    45deg,
    rgba(39, 174, 96, 0.9) 23%,
    rgba(0, 0, 0, 0.9) 100%
  );

  > svg {
    position: absolute;
    top: 2rem;
    right: 3.5rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `};
`;

export const Link = styled.span`
  color: #fff;
`;
