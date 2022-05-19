import insta1 from "../../assets/insta1.jpg";
import insta2 from "../../assets/insta2.jpg";
import insta3 from "../../assets/insta3.jpg";
import insta4 from "../../assets/insta4.jpg";
import insta5 from "../../assets/insta5.jpg";
import insta6 from "../../assets/insta6.jpg";
import insta7 from "../../assets/insta7.jpg";
import insta8 from "../../assets/insta8.jpg";

import { Container, Section, Area } from "./styles";

const navTo = (url) => {
  window.open(url, "_blank");
};

function Universe() {
  return (
    <Section>
      <Container>
        <Area>
          <div
            class="image"
            onClick={() => navTo("https://www.instagram.com/p/CdtFlObK7H3/")}
          >
            <img src={insta1} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p class="description">
                The CHIRON Super Sport - BUGATTI`S ultimate Grand Tourisme -
                came and It consquered,producing an awe-Inspiring 1,618PS on
                a...
              </p>
            </div>
          </div>
          <div
            class="image"
            onClick={() => navTo("https://www.instagram.com/p/Cdn_nRwKbzt/")}
          >
            <img src={insta2} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p class="description">
                The CENTODIECI has been relentlessly developed to effortlessly
                perform In any on-road envlronment - an unmatched ability of
                all...
              </p>
            </div>
          </div>
          <div
            class="image"
            onClick={() => navTo("https://www.instagram.com/p/CdgNrS6qdlV/")}
          >
            <img src={insta3} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p class="description">
                Inspired by the super sports car of the 1990s - the
                groundbreaking EB110 - the CENTODIECI`s Interior has been
                fully...
              </p>
            </div>
          </div>
          <div
            class="image"
            onClick={() => navTo("https://www.instagram.com/p/CdbEBSXKcCs/")}
          >
            <img src={insta4} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p class="description">
                The "Les Légendes de Bugatti" series Is rich With heritage and
                Exclusivity. Named "Black Bess", the Legends VITESSE was...
              </p>
            </div>
          </div>
          <div
            class="image"
            onClick={() => navTo("https://www.instagram.com/p/CdqkNn1qD_X/")}
          >
            <img src={insta5} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p class="description">
                Preparing for simulated take-off. Only a unique high-performance
                dynamometer can handle the pure strength of the CHIRON Super...
              </p>
            </div>
          </div>
          <div
            class="image"
            onClick={() => navTo("https://www.instagram.com/p/CdkIPt2Kbj7/")}
          >
            <img src={insta6} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p class="description">
                As the odometer gathered over 55,000 test kilometers, the
                CENTODIECI pre-production prototype exits the Molsheim Atelier
                to begin...
              </p>
            </div>
          </div>
          <div
            class="image"
            onClick={() => navTo("https://www.instagram.com/p/Cddo2wHKSSp/")}
          >
            <img src={insta7} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p class="description">
                The Interior of the highly exclusive CENTODIECI and all its
                finelu detailed elements takes around 16 weeks for BUGATTI`s
                expert...
              </p>
            </div>
          </div>
          <div
            className="image"
            onClick={() => navTo("https://www.instagram.com/p/CdYfMJnK2aH/")}
          >
            <img src={insta8} alt="" />
            <div class="image__overlay image__overlay--primary">
              <p className="description">
                A matte black silhouette rest for but a moment. At the push of a
                button, the BUGATTI CHIRON Sport`s W16 engine bursts Into...
              </p>
            </div>
          </div>
        </Area>
      </Container>
    </Section>
  );
}

export default Universe;
