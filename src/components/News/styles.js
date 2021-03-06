import styled from 'styled-components';
import { white, black } from 'styles/colorProvider'

export const Section = styled.div`
  display: flex;
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
  align-items: top;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 90%;
    align-items: left;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
export const Image = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;

  img{
    width: 100%;
    align-items: flex-start;
    text-align: left;
  }
`;
export const Right = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  p{
    font-size: 12px;
    margin-bottom: -15px;
    color: #888888; 
  }
  h3{
    font-size: 22px;
    font-weight: 400;
    color: ${black}; 
  }

  div{
    display: flex;
    margin-top: 36.5%;
    flex-direction: row;
    width: 180px;
    height: 50px;
    align-items: center;
    cursor: pointer;
    
    :hover{
        transition: all 0.5s;
        border-bottom: 1px solid #888888;
      }
    p{
      margin-bottom: 0px;
      font-size:16px;      
    }

    @media (max-width: 1000px) {
      margin-top: 0;
    }
  }
`;
