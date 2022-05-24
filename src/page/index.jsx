import React from "react";
import { Section, Title, Topico, Divider } from "./styles";
import {
  Header,
  Footer,
  Models,
  Universe,
  News,
  OtherNews,
  Social,
} from "components";
import { BsArrowRight } from "react-icons/bs";
import Fade from "react-reveal/Fade";

function Page() {
  const navTo = (url) => {
    window.open(url, "_blank");
  };

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
            <button
              onClick={() =>
                navTo(
                  "https://www.bugatti.com/models/chiron-models/chiron-super-sport/"
                )
              }
            >
              DISCOVER MODE
            </button>
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
      <Divider>
        <hr />
        <div>
          <a href="https://www.bugatti.com/media/news/">VIEW ALL NEWS</a>
          <BsArrowRight
            color="#888888"
            size={22}
            style={{ marginLeft: "10px" }}
          />
        </div>
      </Divider>
      <Section>
        <Fade left>
          <div className="category">
            <Title>SOCIAL @BUGATTI</Title>
          </div>
          <Social />
        </Fade>
      </Section>
      <Divider>
        <hr />
        <div>
          <a href="https://www.bugatti.com/media/social-media/">
            VIEW MORE POSTS
          </a>
          <BsArrowRight
            color="#888888"
            size={22}
            style={{ marginLeft: "10px" }}
          />
        </div>
      </Divider>
      <Footer />
    </div>
  );
}

export default Page;
