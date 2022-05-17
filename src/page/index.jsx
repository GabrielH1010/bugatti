import React from "react";
import { Header, Container, Section, Area, Title, Topico } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import car1 from "../assets/car1.jpg";

function Page() {
  return (
    <div className="App">
      <Header id="Home">
        <Area>
          <AiOutlineMenu
            size={18}
            color="#717171"
            style={{ cursor: "pointer" }}
          />
          <img
            src="https://www.bugatti.com/typo3conf/ext/bugatti_sitepackage/Resources/Public/Images/Logo/logo-bugatti_84x44.webp"
            alt=""
          />
          <div>
            <p>
              FIND A BUGATTI PARTNER{" "}
              <FiMapPin style={{ marginLeft: 10 }} size={18} color="#717171" />
            </p>
            <p className="icon">
              <FiMapPin style={{ marginLeft: 10 }} size={18} color="#717171" />
            </p>
          </div>
        </Area>
      </Header>

      <Topico>
        <div className="topicContainer">
          <h3 className="title">BUGATTI CHIRON SUPER SPORT</h3>
          <p className="subtitle">THE ULTIMATE GRAND TOURISME</p>
          <p className="subtitle">DELIVERING BRUTAL PERFORMANCE</p>
          <p className="subtitle">IN TOTAL COMFORT</p>
          <button>DISCOVER MODE</button>
        </div>
      </Topico>

      <Section>
        <div className="category">
          <Title style={{ color: "black", fontWeight: 500 }}>Models</Title>
        </div>
        <Container>
          <div className="grid">
            <div class="item item-1">
              <img src={car1} alt="" />
              <button>ver mais</button>
            </div>
            <div className="item item-2">
              <img
                src="https://www.automaistv.com.br/wp-content/uploads/2019/05/bugatti_la_voiture_noire_6.jpg"
                alt=""
              />
              <button>ver mais</button>
            </div>
            <div className="item item-3">
              {" "}
              <img
                src="https://s2.glbimg.com/33SufEkkebUPZ_hdkr-RIKcbzxM=/e.glbimg.com/og/ed/f/original/2021/10/06/abre.jpeg"
                alt=""
              />
              <button>NOVIDADE</button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <div className="category">
          <Title style={{ color: "black", fontWeight: 500 }}>
            BUGATTI UNIVERSE
          </Title>
        </div>
        <Container></Container>
      </Section>
    </div>
  );
}

export default Page;
