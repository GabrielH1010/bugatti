import styled from 'styled-components';
import { primary, textHeader, white } from '../styles/colorProvider'

export const Header = styled.nav`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: center;
  background-color: white;

  img{
    display: flex;
    flex-direction: row;
    margin-left: 175px;
    width: 75px;
    height: 40px;
  }

  p {
    text-decoration: none;
    color: ${textHeader};
    display: flex;
    font-size: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover {
      color: ${primary};
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.height || '100vh'} ;
  box-sizing: border-box;
  padding: 30px 0px;
  background-image: ${(props) => props.backgroundImage};
  `
export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 1080px) {
    width: 80%;
  }

`;
export const Area = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97%;

  @media (max-width: 1080px) {
    width: 80%;
  }
`;
