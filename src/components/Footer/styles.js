import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  height: 30vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  margin-top: 50px;

`
export const Area = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -35px;
  width: 97%;

  div{
    margin-right: 22px;
    cursor: pointer;
    :hover{
      transition: all 0.3s;
      opacity: 0.6;
    }
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;
 
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p{
    font-size:12px;
    color: #888888;
    margin-top: 27px;
    font-weight: 500;
  }

  div{
    margin: 25px 0 -20px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: row;

    a{
      color: #888888;
      font-size: 12px;
      margin-left: 25px;
      text-decoration: none;
      font-weight: 500;

      :hover{
        text-decoration: underline;

      }
      @media (max-width: 800px) {
      display: none;
    } 
  }
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`;
 
