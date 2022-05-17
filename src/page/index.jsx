import React, { useState } from "react";
import { Header, Container, Section, Area } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { FiMapPin } from "react-icons/fi";
import { textHeader } from "./../styles/colorProvider";

function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (section) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      scrollPadding: "50px",
      behavior: "smooth",
    });
  };

  const navTo = (url) => {
    setMobileMenuOpen(false);
    window.open(url, "_blank");
  };

  return (
    <div className="App">
      <Header id="Home">
        <Area>
          <AiOutlineMenu size={18} color={textHeader} />
          <img
            src="https://www.bugatti.com/typo3conf/ext/bugatti_sitepackage/Resources/Public/Images/Logo/logo-bugatti_84x44.webp"
            alt=""
          />
          <div>
            <p>
              FIND A BUGATTI PARTNER{" "}
              <FiMapPin
                style={{ marginLeft: 10 }}
                size={20}
                color={textHeader}
              />
            </p>
          </div>
        </Area>
      </Header>

      <Section
        style={{
          backgroundImage:
            "url(https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-b40d6034c325ce3bf50035ad5f958a75.webp)",
          height: "85vh",
        }}
      ></Section>
    </div>
  );
}

export default Page;
