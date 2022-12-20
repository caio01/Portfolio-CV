import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px 135px;
  justify-content: space-between;
  color: white;
  align-items: flex-end;

  @media (max-width: 1070px) {
    padding: 20px 65px;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 50px;
  }

  > svg {
    display: none;
    font-size: 45px;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;

export const Logo = styled.a`
  font-size: 36px;
  font-weigth: 700;
  color: #fff;
  text-decoration: none;

  &:active {
    color: #27ae60;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Link = styled.span`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  transition: 150ms;

  &:hover {
    color: #27ae60;
  }

  &:active {
    color: #27ae60;
  }
`;

export const Flag = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Img = styled.div`
  width: 50px;
  cursor: pointer;
`;
