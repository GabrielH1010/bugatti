import React from "react";
import { Section, Title, Topico } from "./styles";
import {
  Header,
  Footer,
  Models,
  Universe,
  News,
  OtherNews,
  Social,
} from "components";
import Fade from "react-reveal/Fade";

function Page() {
  return (
    <div className="App">
      <Header />
      <Topico>
        <div className="topicContainer">
          <Fade top>
            <h3 className="title">BUGATTI CHIRON SUPER SPORT</h3>
          </Fade>
          <Fade bottom>
            <p className="subtitle">THE ULTIMATE GRAND TOURISME</p>
            <p className="subtitle">DELIVERING BRUTAL PERFORMANCE</p>
            <p className="subtitle">IN TOTAL COMFORT</p>
            <button>DISCOVER MODE</button>
          </Fade>
        </div>
      </Topico>
      <Section>
        <Fade left>
          <div className="category">
            <Title style={{ marginTop: 75 }}>Models</Title>
          </div>
          <Models />
        </Fade>
      </Section>

      <Section>
        <Fade left>
          <div className="category">
            <Title>BUGATTI UNIVERSE</Title>
          </div>
          <Universe />
        </Fade>
      </Section>

      <Section>
        <Fade left>
          <div className="category">
            <Title>NEWS</Title>
          </div>
          <News />
          <OtherNews />
        </Fade>
      </Section>
      <Section>
        <Fade left>
          <div className="category">
            <Title>SOCIAL @BUGATTI</Title>
          </div>
          <Social />
        </Fade>
      </Section>

      <Footer />
    </div>
  );
}

export default Page;
