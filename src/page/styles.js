import styled from 'styled-components';
import { primary, textHeader, white } from '../styles/colorProvider'

export const Header = styled.nav`
  display: flex;
  height: 9.5vh;
  align-items: center;
  justify-content: center;
  background-color: white;

  img{
    display: flex;
    flex-direction: row;
    margin-left: 175px;
    width: 75px;
    height: 40px;
    cursor: pointer;

    @media (max-width: 800px) {
      margin: 0px;
    }
  }

  .icon{
    display: none;

    @media (max-width: 800px) {
      text-decoration: none;
      color: ${textHeader};
      display: flex;
      font-size: 14px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  p{
    text-decoration: none;
    color: ${textHeader};
    display: flex;
    font-size: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 800px) {
      display: none;
    }
}
`
export const Area = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
 
export const Topico = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  height: 100vh ;
  background-image: url('https://2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/08-bugatti_css300_delivery-scaled.jpg');

  @media (max-width: 800px) {
    background-image: url('https://img.ibxk.com.br/2020/09/18/18124050132137.jpg');
    height: 115vh ;
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
      color: white;
      font-weight: 600;
      margin-top: 20px;
      background-color: transparent;
      border: 1px solid white;
      height: 40px;
      width: 150px;
      cursor: pointer;

      :hover{
        background-color: white;
        color: black;
      }
    }
  }`


export const Section = styled.section`
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

export const Container = styled.nav`
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .grid {
  display: grid;
	grid-template-columns: auto auto;
	grid-gap: 10px;
  
  }

  button{
    background: #888;
    width: 100%;
    height: 10%;
    border: none;
  }
  img{
    width: 100%;
    height: 90%;
    object-fit: cover;
    cursor: pointer;

    :hover{
      opacity: 0.9;
    }
  }

  .item {
    text-align: center;
  }

  .item.item-3 {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  @media (max-width: 800px) {
    width: 90%;
  }

`;

export const Title = styled.h3`
  font-size: ${(props) => props.fontSize || '45px'};
  text-transform: uppercase;
  color: ${(props) => props.color || white};
  margin-bottom: ${(props) => props.marginBottom || '25px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
`;
