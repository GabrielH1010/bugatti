import styled from 'styled-components';
import { white } from 'styles/colorProvider'

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'center'};
  height: 100%;
  background-color: white;


.category{
    width: 90%;
  }
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
    }
  }

  @media (max-width: 1200px) {
    grid-gap: 0px;
  }
`;

export const Item = styled.div`
  text-align: center;
  justify-content: center;

  div{
      width: 100%;
      height: 96%;
    }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.1s;

    :hover{
      opacity: 0.9;
    }
  }
`
export const Title = styled.h3`
  font-size: ${(props) => props.fontSize || '45px'};
  text-transform: uppercase;
  color: ${(props) => props.color || white};
  margin-bottom: ${(props) => props.marginBottom || '25px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
`;

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
`;

export const Dialog = styled.div`
  display: flex;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: red;
  align-items: center;
  justify-content: center;
`;

export const DialogBody = styled.div`
  max-height: 90vh;
  max-width: 95vw;
  overflow: auto;

  ::-webkit-scrollbar {
     width: 10px;
   }
   ::-webkit-scrollbar-thumb {
   background: #121214;
     border-radius: 10px;
   }
   ::-webkit-scrollbar-thumb:hover {
     box-shadow: inset 0 0 2px #81c043;
 }
`;