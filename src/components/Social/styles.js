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
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;

  .image {
    position: relative;
    width: 100%;
    cursor: pointer
    }

    img {
    display: block;
    width: 100%;
    }

    .image__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
    }   

    .image__overlay--primary {
        background: #121211;
    }

    .image__overlay > * {
        transform: translateY(20px);
        transition: transform 0.25s;
    }

    .image__overlay:hover {
        opacity: 0.72;
    }

    .image__overlay:hover > * {
        transform: translateY(0);
    }

    .description {
        padding-left: 10px;
        font-size: 14px;
        margin-top: 90%;

        @media (max-width: 900px) {
          font-size: 12px;
          margin-top: 90%;
        }
        @media (max-width: 730px) {
          font-size: 12px;
          margin-top: 0%;
        }
        @media (max-width: 700px) {
          font-size: 20px;
          margin-top: 95%;
        }
    }

  @media (max-width: 1200px) {
    grid-gap: 10px;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1000px) {
    grid-gap: 10px;
    grid-template-columns: auto auto;
  }
  @media (max-width: 700px) {
    grid-gap: 15px;
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
    display: block;
    width: 100%;
    height: 95%;
    cursor: pointer;

    :hover{
      opacity: 0.9;
    }
  }
`
export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background: red;
    overflow: hidden;
    width: 100%;
    height:0;
    transition: 1s ease;
`