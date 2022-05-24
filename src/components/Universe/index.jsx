import React from "react";
import watch from "../../assets/watch.webp";
import car from "../../assets/car.webp";
import carrear from "../../assets/carrear.webp";
import { BsArrowRight } from "react-icons/bs";

import { Container, Section, Area, Item, Description } from "./styles";

function Universe() {
  const navTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Section>
      <Container>
        <Area>
          <Item onClick={() => navTo("https://www.bugatti.com/lifestyle/")}>
            <div className="bottom-container">
              <img src={watch} alt="" />
              <Description>
                <p style={{ marginLeft: 10, fontSize: "14px" }}>LIFESTYLE</p>
                <BsArrowRight size={20} style={{ marginRight: 10 }} />
              </Description>
            </div>
          </Item>
          <Item onClick={() => navTo("https://www.partner.bugatti/")}>
            <div className="bottom-container">
              <img src={car} alt="" />
              <Description>
                <p style={{ marginLeft: 10, fontSize: "14px" }}>
                  FIND A BUGATI PARTNER
                </p>
                <BsArrowRight size={20} style={{ marginRight: 10 }} />
              </Description>
            </div>
          </Item>
          <Item onClick={() => navTo("https://www.bugatti.com/career/")}>
            <div className="bottom-container">
              <img src={carrear} alt="" />
              <Description>
                <p style={{ marginLeft: 10, fontSize: "14px" }}>CAREER</p>
                <BsArrowRight size={20} style={{ marginRight: 10 }} />
              </Description>
            </div>
          </Item>
        </Area>
      </Container>
    </Section>
  );
}

export default Universe;
