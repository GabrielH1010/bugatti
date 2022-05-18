import styled from 'styled-components';

export const DialogBody = styled.div`
  min-height: 200px;
  min-width: 650px;
  box-sizing: border-box;
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 30px;

  @media (max-width: 1000px) {
    min-width: 410px;
  }
`;
