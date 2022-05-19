import React from "react";
import news from "../../assets/news.webp";
import { BsArrowRight } from "react-icons/bs";
import { Container, Section, Image, Right } from "./styles";

function News() {
  return (
    <Section>
      <Container>
        <Image>
          <img src={news} alt="" />
        </Image>
        <Right>
          <p>MOLSHEIM, 28 APRIL 2022</p>
          <h3>
            BUGATTI TYPE 57 SC ATLANTIC SHOWCASED AT THE GUGGENHEIM MUSEUM
            BILBAO EXHIBITION
          </h3>
          <div>
            <p>TO PRESS RELEASE</p>
            <p style={{ marginLeft: "10px" }}>
              <BsArrowRight size={22} color="#888888" />
            </p>
          </div>
        </Right>
      </Container>
    </Section>
  );
}

export default News;
