import React from "react";
import {
  BsPinterest,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { Container, Area } from "./styles";

function Footer() {
  return (
    <Container>
      <Area>
        <div>
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsPinterest />
          <BsYoutube />
          <BsLinkedin />
        </div>
      </Area>
    </Container>
  );
}

export default Footer;
