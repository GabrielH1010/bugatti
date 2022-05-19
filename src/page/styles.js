import styled from 'styled-components';
import background from '../assets/background.jpeg'
import backgroundMobile from '../assets/backgroundMobile.jpg'
import { black, white } from 'styles/colorProvider'

export const Topico = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  height: 88vh ;
  max-width: 1280;
  background-image: url(${background});
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    background-image: url(${backgroundMobile});
    }
  @media (max-width: 415px) {
    height: 65vh;
    }
  @media (max-width: 380px) {
    height: 86vh;
    }

  .topicContainer{
    width: 40%;
    margin-left: 55px;

    @media (max-width: 810px) {
      width: 85%;
      margin: 50px 0 0 20px;
    }

    .title{
      font-size: 55px;
      font-weight: 500;
      margin: 100px 0 0 0px;

      @media (max-width: 810px) {
        font-size: 50px;
      }
    }
    .subtitle{
      line-height: 5px;
      font-size: 16px;

      @media (max-width: 810px) {
        line-height: 10px;
      }
    }

    button{
      color: ${white};
      font-weight: 600;
      margin-top: 20px;
      background-color: transparent;
      border: 1px solid white;
      height: 40px;
      width: 150px;
      cursor: pointer;

      :hover{
        background-color: white;
        color: ${black};
      }
    }
  }`

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${white};

  .category{
    width: 90%;
  }
`

export const Title = styled.h3`
  font-size: ${(props) => props.fontSize || '45px'};
  text-transform: uppercase;
  color: ${black};
  margin: 100px 0 25px 0;
  font-weight: 500;

  @media (max-width: 800px) {
    margin: 80px 0 25px 0;
    font-size: 35px;
  }
`
export const Divider = styled.div`
  margin-top: 60px;
  display:flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr{
    width: 280px;
    background: #888888;
    height: 1.5px;
    border: none;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;

    a{
      text-decoration: none;
      cursor: pointer;
      font-size: 17px;
      margin: 5px;
      color: #888888;
    }
  }
`
