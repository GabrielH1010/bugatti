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
