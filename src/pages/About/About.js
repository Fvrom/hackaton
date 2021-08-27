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
import heartlight from "../../assets/heart-light.svg";

const AboutPage = () => {
  return (
    <>
      <section className="collab-wrapper">
        <img src={line} id="line" alt="start av Om Oss-sektionen" />

        <div className="logos">
          <img src={yrgolarge} id="yrgo-logo" alt="YRGOs logotyp" />
          <img src={heartlight} id="x" alt="älskar"/>
          <img src={rm} id="rm-logo" alt="Räddningsmissionens logotyp" />
        </div>
        <div className="collab-text">
          <p>
            I 2021 års upplaga av YRGOs klassiska tävling Sammanslaget samarbetade
            utbildningarna Game Creator Programmer, Game Creator Artist, Manusförfattare,
            Webbutvecklare och UX Designer för att skapa en interaktiv digital
            berättelse åt kunden Räddningsmissionen. Nedan kan ni läsa om de
            studenter som står bakom detta bidrag samt hur ni kan se mer av
            deras arbete och kontakta dem.
          </p>
          <a href="https://www.yrgo.se/">Läs mer om YRGOS utbildningar</a>
        </div>
      </section>
      <section className="about-page">
        <Card
          image={Sandra}
          alt="Sandra Danielsson"
          title="Webbutvecklare"
          text="Vårt ansvarsområde som webbutvecklare har varit att användare ska kunna besöka en sida som snyggt och smidigt kunnat visa upp materialet skapat av Game Programmer samtidigt som vi implementerat god användarvänlighet. Vi valde att arbeta i ramverket React för att få fördjupa våra kunskaper inom det.
          Starten av projektet innebar en del efterforskning kring att kombinera React och Unity men efter en del trial & error är vi nöjda med lösningen.
          Efter den första tekniska uppstarten har jag huvudsakligen arbetat med att designa samt bygga denna presentationsdel, där jag bl a jobbat med components."
          contact="Se mer på min Github:"
          url="https://github.com/San-Dan"
        ></Card>

        <Card
          image={Mia}
          alt="Mia Lorén"
          title="UX Designer"
          text="Som UX Designer har jag lett gruppens idégenerering i en digital workshop där vi använde oss av metoder som Affinity Mapping, Crazy 8 och Dot Voting. Det ledde oss till 5 starka byggstenar som representerade “Kärleken är större” för oss. Dessa ligger till grund för berättelsen. Jag har arbetat med hemsidans utseende i Figma och samarbetat med webbutveckling för att hitta bra lösningar som passar projektets längd och vår förmåga. Jag har gjort användartester för att utvärdera användarvänligheten och samarbetat med WU och GC genom att löpande komma med input där användarvänligheten är i fokus."
          contact="Kontakta mig:"
          url="hej@gmail.com"
        ></Card>

        <Card
          image={Birk}
          alt="Birk Härkönen"
          title="Manusförfattare"
          text="Jag går andra året på YRGO's utbildning för Manusförfattare och antog utmaningen att skapa samt bearbeta projektets narrativa del. Jag skrev även texten som i kombination med en form av bildspel förmedlar historien. Av naturliga skäl pågick större delen av mitt arbete under projektets början. Efter lite research om Räddningsmissionen och problematiken de arbetar med utvecklade jag en narrativ outline. En outline som senare skulle visa sig vara för stor för att faktiskt kunna användas. Kompromissen blev att texten behövde omstruktureras för att senare bli en del av den slutgiltiga presentationen."
          contact="Kontakta mig:"
          url="birk.1989@hotmail.com"
        ></Card>

        <Card
          image={Moa}
          alt="Moa Hansen"
          title="Game Artist"
          text="Jag går andra året av Game Creator Artist på YRGO, och tog rollen som grafiker 
          och ansvarade för hela projektets grafiska element och arbetade tillsammans med manusförfattaren för att 
          kunna visualisera berättelsen han skrev. Det började med några konceptskisser av huvudkaraktären Vanjo, baserat 
          på beskrivningen manusförfattaren gav mig, och efter detta en enkel storyboard för att kunna lista ut hur många 
          bilder som behövdes och sedan färdigställa bilderna. Men då ingenting är satt i sten och fler ideér alltid kan komma 
         framemot slutet fick jag rita en extra bild och några knappar. Men iom vår starka grund blev det inga större problem."
          contact="Se fler av mina verk på Artstation:"
          url="https://www.artstation.com/theleafcuter"
        ></Card>

        <Card
          image={Ida}
          alt="Ida From"
          title="Webbutvecklare"
          text="I projektet har vi webbutvecklare arbetat tillsammans med Mia från UX Designer för att få ihop hemsidans uppbyggnad och interaktioner, där användarvänligheten har varit i fokus.
           Mina huvudsakliga ansvarsområden därefter har varit att samarbeta med Game Programmer för att se till att berättelsen kommit ut på hemsidan med en snygg interaktiv upplevelse och implementerat animationer på sidan. Det har varit en intressant och rolig utmaning att få GP's byggstenar att kommunicera med webbens byggstenar."
          contact="Kontakta mig:"
          url="hej@gmail.com"
        ></Card>

        <Card
          image={Robin}
          alt="Robin Bono"
          title="Game Programmer"
          text="Målet med min uppgift var att implementera tillverkade delar från grafiker och manusförfattare, därefter utveckla en form av interaktivitet.
          Som game programmer var det en utmaning att gå utanför ramarna för hur man vanligtvis tänker sig ett spel.
          Men under den korta tiden vi hade på oss så tycker jag att vi tillsammans lyckades få ihop något bra.
          Att få det interaktiva spelfönstret att kommunicera med webbsidan var något som jag verkligen tyckte var intressant.
          Och det är även något jag gärna utforskar mer i framtiden!"
          contact="Se mer på min portfolio:"
          url="http://portfolio.omnick.se/"
        ></Card>
      </section>
    </>
  );
};

export default AboutPage;
