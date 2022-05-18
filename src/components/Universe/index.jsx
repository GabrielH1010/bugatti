import React, { useState } from "react";
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.webp";
import detail1 from "../../assets/detailCar1.png";
import detail2 from "../../assets/detailCar2.png";
import detail3 from "../../assets/detailCar3.png";
import { Container, Section, Title, Grid, Item, Button } from "./styles";

function Models() {
  const [chiron, setChiron] = useState(true);
  const [laVoiture, setLaVoiture] = useState(true);
  const [bolide, setBolide] = useState(true);

  return (
    <Section>
      <div className="category">
        <Title style={{ color: "black", fontWeight: 500 }}>Models</Title>
      </div>
      <Container>
        <Grid>
          {chiron ? (
            <Item className="item-1">
              <div>
                <img src={car1} alt="" />
                <Button onClick={() => setChiron(false)}>LEAND MORE</Button>
              </div>
            </Item>
          ) : (
            <Item className="item-1">
              <div>
                <img src={detail1} alt="" />
                <Button onClick={() => setChiron(true)}>BACK</Button>
              </div>
            </Item>
          )}

          {laVoiture ? (
            <Item className="item-2">
              <div>
                <img src={car2} alt="" />
                <Button onClick={() => setLaVoiture(false)}>LEAND MORE</Button>
              </div>
            </Item>
          ) : (
            <Item className="item-2">
              <div>
                <img src={detail2} alt="" />
                <Button onClick={() => setLaVoiture(true)}>BACK</Button>
              </div>
            </Item>
          )}
          {bolide ? (
            <Item className="item-3">
              <div>
                <img src={car3} alt="" />
                <Button onClick={() => setBolide(false)}>LEAND MORE</Button>
              </div>
            </Item>
          ) : (
            <Item className="item-3">
              <div>
                <img src={detail3} alt="" />
                <Button onClick={() => setBolide(true)}>BACK</Button>
              </div>
            </Item>
          )}
        </Grid>
      </Container>
    </Section>
  );
}

export default Models;
