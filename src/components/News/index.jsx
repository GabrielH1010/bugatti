import React from "react";
import news from "../../assets/news.webp";
import { Container, Section } from "./styles";

function News() {
  return (
    <Section>
      <Container>
        <img src={news} alt="" />
        <p style={{ color: "black" }}>teste</p>
      </Container>
    </Section>
  );
}

export default News;
