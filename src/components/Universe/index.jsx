import React, { useState } from "react";
import watch from "../../assets/watch.webp";
import car from "../../assets/car.webp";
import carrear from "../../assets/carrear.webp";
import { BsArrowRight } from "react-icons/bs";

import { Container, Section, Area, Item, Description } from "./styles";
import { Dialog } from "components";

function Universe() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section>
      <Container>
        <Area>
          <Item onClick={handleOpen}>
            <div className="bottom-container">
              <img src={watch} alt="" />
              <Description>
                <p style={{ marginLeft: 10, fontSize: "14px" }}>LIFESTYLE</p>
                <BsArrowRight size={20} style={{ marginRight: 10 }} />
              </Description>
            </div>
          </Item>
          <Item onClick={handleOpen}>
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
          <Item onClick={handleOpen}>
            <div className="bottom-container">
              <img src={carrear} alt="" />
              <Description>
                <p style={{ marginLeft: 10, fontSize: "14px" }}>CAREER</p>
                <BsArrowRight size={20} style={{ marginRight: 10 }} />
              </Description>
            </div>
          </Item>

          <>
            <Dialog open={open} onClose={handleClose} title="teste">
              <p>teste</p>
            </Dialog>
          </>
        </Area>
      </Container>
    </Section>
  );
}

export default Universe;
