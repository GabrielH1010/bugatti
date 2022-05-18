import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  height: 30vh;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-top: 50px;

`
export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 97%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
 
