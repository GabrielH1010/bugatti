import React from "react";
import {
  BsPinterest,
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { Container, Area, Description } from "./styles";

function Footer() {
  return (
    <Container>
      <Area>
        <div>
          <BsFacebook size={17} />
        </div>
        <div>
          <BsTwitter size={17} />
        </div>
        <div>
          <BsInstagram size={17} />
        </div>
        <div>
          <BsPinterest size={17} />
        </div>
        <div>
          <BsYoutube size={17} />
        </div>
        <div style={{ marginRight: 0 }}>
          <BsLinkedin size={17} />
        </div>
      </Area>
      <Description>
        <p>© 2022 BUGATTI AUTOMOBILES S.A.S.</p>
        <div>
          <a href="https://www.bugatti.com/contact/">CONTACT</a>
          <a href="https://www.bugatti.com/career/">CAREER</a>
          <a href="https://www.bugatti.com/media/">MEDIA</a>
          <a href="https://www.bugatti.com/fileadmin/media/Media/Footer/Legal_Notice/Bugatti_legal_notice_for_data_protection_rights_v2.pdf">
            LEGAL NOTICE
          </a>
          <a href="https://www.bugatti.com/fileadmin/media/Media/Footer/UK_Modern_Slavery_Act/2019/UK_Modern_Slavery_Act_Bugatti__2021_EN_Final.pdf">
            UK MODERN SLAVERY ACT
          </a>
          <a href="https://www.bugatti.com/fileadmin/media/Media/Footer/Code_of_Conduct/BUGATTI_Code_of_Conduct_ENG_final_21042022.pdf">
            CODE OF CONDUCT
          </a>
          <a href="https://www.bugatti.com/data-protection-notice/">
            DATA PROTECTION NOTICE
          </a>
          <a href="null">COOKIES SETTINGS</a>
        </div>
      </Description>
    </Container>
  );
}

export default Footer;
