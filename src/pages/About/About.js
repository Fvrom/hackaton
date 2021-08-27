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

import yrgolarge from "../../assets/yrgologga.svg";
import rm from "../../assets/rmlogoofc1.svg";

const AboutPage = () => {
  return (
    <>
      <section className="collab-wrapper">
        <img src={line} id="line" alt="start av Om Oss-sektionen" />

        <div className="logos">
          <img src={yrgolarge} id="yrgo-logo" alt="YRGOs logotyp" />
          <p id="x">&</p>
          <img src={rm} id="rm-logo" alt="Räddningsmissionens logotyp" />
        </div>
        <div className="collab-text">
          <p>
            I 2021 års upplaga av YRGOs årliga tävling Sammanslaget samarbetade
            utbildningarna Game Programmer, Game Artist, Manusförfattare,
            Webbutvecklare och UX Designer för att skapa en interaktiv digital
            berättelse åt kunden Räddningsmissionen. Nedan kan ni läsa om de
            studenter som står bakom detta bidrag samt hur ni kan se mer av
            deras arbete och kontaktuppgifter
          </p>
        </div>
      </section>
      <section className="about-page">
        <Card
          image={Sandra}
          alt="Sandra Danielsson"
          title="Webbutvecklare"
          text="DETTA ÄR EXAKT 600 TECKEN. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"
          contact="Se mer på min Github:"
          url="https://github.com/San-Dan"
        ></Card>

        <Card
          image={Mia}
          alt="Mia Lorén"
          title="UX Designer"
          text="Som UX designer har jag lett gruppens idégenerering i en digital workshop där vi använde oss av metoder som Affinity mapping, Crazy 8 och Dot voting. Det ledde oss till 5 starka byggstenar som representerade “kärleken är större” för oss. Dessa ligger till grund för berättelsen.  Jag har arbetat med hemsidans utseende i Figma och samarbetat med webbutveckling för att hitta bra lösningar som passar projektets längd och vår förmåga. Jag har gjort användartest för att utvärdera användarvänligheten och samarbetat med WU och GC genom att löpande komma med input där användarvänligheten är i fokus."
          contact="Kontakta mig:"
          url="hej@gmail.com"
        ></Card>

        <Card
          image={Birk}
          alt="Birk Härkönen"
          title="Manusförfattare"
          text="Jag går andra året på YRGO's utbildning för Manusförfattare och antog utmaningen att skapa samt bearbeta projektets narrativa del. Jag skrev även texten som i kombination med en form av bildspel förmedlar historien. Av naturliga skäl pågick större delen av mitt arbete under projektets början. Efter lite research om Räddningsmissionen och problematiken de arbetar med utvecklade jag en narrativ outline. En outline som senare skulle visa sig vara för stor för att faktiskt kunna användas. Kompromissen blev att texten behövde omstruktureras för att senare bli en del av den slutgiltiga presentationen."
          contact="Kontakta mig:"
          url="hej@gmail.com"
        ></Card>

        <Card
          image={Moa}
          alt="Moa Hansen"
          title="Game Artist"
          text="Lorem ipsum dolor sit amet consectetur"
          contact="Kontakta mig:"
          url="hej@gmail.com"
        ></Card>

        <Card
          image={Ida}
          alt="Ida From"
          title="Webbutvecklare"
          text="Lorem ipsum dolor sit amet consectetur"
          contact="Kontakta mig:"
          url="hej@gmail.com"
        ></Card>

        <Card
          image={Robin}
          alt="Robin Bono"
          title="Game Programmer"
          text="Lorem ipsum dolor sit amet consectetur"
          contact="Kontakta mig:"
          url="hej@gmail.com"
        ></Card>
      </section>
    </>
  );
};

export default AboutPage;
