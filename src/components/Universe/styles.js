import styled from 'styled-components';
import { white } from 'styles/colorProvider'

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
    height: 95%;
    cursor: pointer;

    :hover{
      opacity: 0.9;
    }
  }
`
export const Description = styled.div`
    display: flex;
    background: #080E1C;
    width: 100%;
    height: 25px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -5px;
    align-items: center;
    text-align: center;
    cursor: pointer;
`