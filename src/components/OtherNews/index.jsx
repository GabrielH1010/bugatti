import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { Container, Section, Area, Item, Description } from "./styles";

function OtherNews() {
  return (
    <Section>
      <Container>
        <Area>
          <Item>
            <div className="bottom-container">
              <img
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-9ba9b9b275ff68a5410570273132fbf5.webp"
                alt=""
              />
              <Description>
                <p>MOLSHEIM, 16 MAY 2022</p>
                <h3>
                  BUGATTI, THE MONACO GRAND PRIX AND LOUIS CHIRON – WRITING
                  MOTOR RACING HISTORY
                </h3>
                <div>
                  <p>TO PRESS RELEASE</p>
                  <p style={{ marginLeft: "10px" }}>
                    <BsArrowRight size={22} color="#888888" />
                  </p>
                </div>
              </Description>
            </div>
          </Item>
          <Item>
            <div className="bottom-container">
              <img
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-9b3496ab9d009f840a686752bbcd9164.webp"
                alt=""
              />
              <Description>
                <p>MOLSHEIM, 16 MAY 2022</p>
                <h3>
                  BUGATTI, THE MONACO GRAND PRIX AND LOUIS CHIRON – WRITING
                  MOTOR RACING HISTORY
                </h3>
                <div>
                  <p>TO PRESS RELEASE</p>
                  <p style={{ marginLeft: "10px" }}>
                    <BsArrowRight size={22} color="#888888" />
                  </p>
                </div>
              </Description>
            </div>
          </Item>
          <Item>
            <div className="bottom-container">
              <img
                src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-de8457f95289f92f893d79f4cbd802af.webp"
                alt=""
              />
              <Description>
                <p>MOLSHEIM, 16 MAY 2022</p>
                <h3>
                  BUGATTI, THE MONACO GRAND PRIX AND LOUIS CHIRON – WRITING
                  MOTOR RACING HISTORY
                </h3>
                <div>
                  <p>TO PRESS RELEASE</p>
                  <p style={{ marginLeft: "10px" }}>
                    <BsArrowRight size={22} color="#888888" />
                  </p>
                </div>
              </Description>
            </div>
          </Item>
        </Area>
      </Container>
    </Section>
  );
}

export default OtherNews;
