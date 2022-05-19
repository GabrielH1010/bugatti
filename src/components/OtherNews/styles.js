import styled from 'styled-components';
import { white, black } from 'styles/colorProvider'

export const Section = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'center'};
  height: 100%;
  background-color: ${white};
`
export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const Area = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;

  @media (max-width: 685px) {
    grid-gap: 0px;
    grid-template-columns: auto;
  }
`;

export const Item = styled.div`
  text-align: center;
  justify-content: center;

  .bottom-container{
      width: 100%;
      height: 95%;
      align-items: center;
      flex-direction: column;
  }
  img{
    width: 100%;
    height: 60%;
    cursor: pointer;

    :hover{
      opacity: 0.9;
    }
  }
`
export const Description = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    cursor: pointer;

    p{
    font-size: 12px;
    margin-bottom: -5px;
    color: #888888; 
    }

    h3{
    font-size: 18px;
    font-weight: 500;
    color: ${black}; 
  }

  div{
    display: flex;
    margin-top: -10px;
    flex-direction: row;
    width: 195px;
    height: 50px;
    align-items: center;
    cursor: pointer;
    
    :hover{
        transition: all 0.5s;
        border-bottom: 1px solid #888888;
      }
    p{
      margin-bottom: 0px;
      font-size:18px;      
    }

    @media (max-width: 1000px) {
      margin-top: 0;
    }
  }
`