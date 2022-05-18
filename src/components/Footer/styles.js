import styled from 'styled-components';
import { textHeader } from 'styles/colorProvider'

export const Container = styled.footer`
  display: flex;
  height: 30vh;
  align-items: center;
  justify-content: center;
  background-color: black;

  img{
    display: flex;
    flex-direction: row;
    margin-left: 175px;
    width: 75px;
    height: 40px;
    cursor: pointer;

    @media (max-width: 800px) {
      margin: 0px;
    }
  }

  .icon{
    display: none;

    @media (max-width: 800px) {
      text-decoration: none;
      color: ${textHeader};
      display: flex;
      font-size: 14px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  p{
    text-decoration: none;
    color: ${textHeader};
    display: flex;
    font-size: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 800px) {
      display: none;
    }
}
`
export const Area = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
 
