import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "./App.css";
import LinkedIn from "./Images/Linkedin-logo.png";
const App = () => {
  gsap.registerPlugin(useGSAP);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ted Kreutzer</h1>
        {/* <h3 className="App-byline">
          Software Developer with 5+ years of experience in front-end
          development
        </h3> */}
        <h3 className="App-byline">
          Software Developer based in New York, NY with over 5 years of
          professional consulting experience.
        </h3>
        <a
          href="https://www.linkedin.com/in/ted-kreutzer/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="Logo-image" src={LinkedIn} alt="LinkedIn Logo" />
        </a>
        <p className="App-footer">more coming soon</p>

        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </header>
      <div className="About-container">
        <h3 className="About-byline">About</h3>
        <p>
          I am a software engineer with over 5 years of experience in
          professional software development consulting, using popular frontend
          technologies and frameworks such as React and TypeScript, Angular, and
          Vue. I have worked with industry giants such as J.P. Morgan and
          Abbott, as well as fast-paced startups. I have gained valuable
          experience in a wide array of industries, tech stacks, and management
          styles; I pride myself on being able to work efficiently under tight
          deadlines while learning new processes, tools, and code bases with the
          ultimate goal of satisfying stakeholders and delivering high-quality
          solutions and final products.
        </p>
      </div>
    </div>
  );
};

export default App;
