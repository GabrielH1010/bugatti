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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  .item-3 {
    grid-row-start: 1;
    grid-row-end: 3;

    div{
      width: 100%;
      height: 98%;

      @media (max-width: 700px) {
        height: 100%;
        }
    }
  }

  @media (max-width: 1200px) {
    grid-gap: 25px;
  }
  @media (max-width: 700px) {
    grid-gap: 7px;
  }
`;

export const Item = styled.div`
  text-align: center;
  justify-content: center;

  div{
      width: 100%;
      height: 96%;

      @media (max-width: 700px) {
        height: 100%;
        }
    }

  img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;

    :hover{
      opacity: 0.9;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  border: none;
  height: 30px;
  color: white;
  align-items: left;
  flex-direction: row;
  cursor: pointer;
  justify-content: flex-start;
  margin: -10px 0 15px 0;
  background-color: #121212;

  :hover{
      opacity: 0.9;
  }

  @media (max-width: 700px) {
    display:none;
  }
`;
