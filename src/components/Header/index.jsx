import React from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.webp";
import Fade from "react-reveal/Fade";
import { Container, Area } from "./styles";

function header() {
  return (
    <Container>
      <Area>
        <Fade top>
          <AiOutlineMenu
            size={18}
            color="#717171"
            style={{ cursor: "pointer" }}
          />
          <img src={logo} alt="Logo Bugatti" />
          <div>
            <p>
              FIND A BUGATTI PARTNER{" "}
              <FiMapPin style={{ marginLeft: 10 }} size={18} color="#717171" />
            </p>
            <p className="icon">
              <FiMapPin style={{ marginLeft: 10 }} size={18} color="#717171" />
            </p>
          </div>
        </Fade>
      </Area>
    </Container>
  );
}

export default header;
