import React from "react";
import Card from "../../components/Card/Card";
import "./about.css";

import Sandra from "../../assets/Sandra.svg";
import Birk from "../../assets/Birk.svg";
import Ida from "../../assets/Ida.svg";
import Mia from "../../assets/Mia.svg";
import Moa from "../../assets/Moa.svg";
import Robin from "../../assets/Robin.svg";
import line from "../../assets/line.png";
import yrgo from "../../assets/yrgologga-sv.png";
import rm from "../../assets/rmlogga.png";

const AboutPage = () => {
  return (
    <>
      <section className="collab-wrapper">
        <img src={line} alt="start av Om Oss-sektionen" />

        <div className="logos">
          <img src={yrgo} id="yrgo-logo" alt="YRGOs logotyp" />
          <p>x</p>
          <img src={rm} id="rm-logo" alt="Räddningsmissionens logotyp" />
        </div>

        <p>Mer text som förklarar att samt varför vi byggt detta?</p>
      </section>
      <section className="about-page">
        <Card
          image={Sandra}
          alt="Sandra Danielsson"
          title="Webbutvecklare"
          text="DETTA ÄR EXAKT 600 TECKEN. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"
        ></Card>

        <Card
          image={Mia}
          alt="Mia Lorén"
          title="UX Designer"
          text="DETTA ÄR EXAKT 600 TECKEN. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"
        ></Card>

        <Card
          image={Birk}
          alt="Birk Härkönen"
          title="Manusförfattare"
          text="DETTA ÄR EXAKT 600 TECKEN. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"
        ></Card>

        <Card
          image={Moa}
          alt="Moa Hansen"
          title="Game Artist"
          text="Lorem ipsum dolor sit amet consectetur"
        ></Card>

        <Card
          image={Ida}
          alt="Ida From"
          title="Webbutvecklare"
          text="Lorem ipsum dolor sit amet consectetur"
        ></Card>

        <Card
          image={Robin}
          alt="Robin Bono"
          title="Game Programmer"
          text="Lorem ipsum dolor sit amet consectetur"
        ></Card>
      </section>
    </>
  );
};

export default AboutPage;
