//@ts-nocheck
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useState, useEffect, useRef } from "react";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import angular from "./Images/logos/angular-logo.png";
import css from "./Images/logos/css-logo.svg";
import figma from "./Images/logos/figma-logo.png";
import git from "./Images/logos/git-logo.png";
import javascript from "./Images/logos/javascript-logo.png";
import node from "./Images/logos/node-logo.png";
import reactLogo from "./Images/logos/react-logo.png";
import redux from "./Images/logos/redux-logo.png";
import sass from "./Images/logos/sass-logo.png";
import typescript from "./Images/logos/typescript-logo.png";

// import particlesJS from 'particles.js'

import Navbar from "./Navbar/Navbar.js";
import BioComponent from "./Bio/Bio";

import "./App.css";
import LinkedIn from "./Images/Linkedin-logo.png";
import ResumeComponent from "./Resume/Resume";
const App = () => {
  const [scrolled, setScrolled] = useState(false);

  // particlesJS.load('particles-js', 'assets/particles.json', function() {
  //   console.log('callback - particles-js config loaded');
  // });

  const logosArray = [
    angular,
    css,
    figma,
    git,
    javascript,
    node,
    reactLogo,
    redux,
    sass,
    typescript,
  ];

  const logos = [
    {
      src: angular,
      text: "Angular 2+",
    },
    {
      src: css,
      text: "CSS",
    },
    {
      src: figma,
      text: "figma",
    },
    {
      src: git,
      text: "git",
    },
    {
      src: javascript,
      text: "javascript",
    },
    {
      src: node,
      text: "node.js",
    },
    {
      src: reactLogo,
      text: "react",
    },
    {
      src: redux,
      text: "redux",
    },
    {
      src: sass,
      text: "sass",
    },
    {
      src: typescript,
      text: "typescript",
    },
  ];

  const summaryRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceTitleRef = useRef(null);
  const dividerExperienceRef = useRef(null);

  const bioContainerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (!scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0) {
        setScrolled(false);
      }
    });
  });

  return (
    <div className="App">
      <div className="Navbar-wrapper">
        <Navbar
          summaryRef={summaryRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          bioContainerRef={bioContainerRef}
        />
      </div>
      <header className="App-header">
        <h1>Welcome</h1>

        <div>
          <h3 className="App-byline">
            I'm Ted Kreutzer, a Software Developer with over 5 years of
            professional consulting experience.
          </h3>
          <a
            href="https://www.linkedin.com/in/ted-kreutzer/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Logo-image" src={LinkedIn} alt="LinkedIn Logo" />
          </a>

          <svg
            className="arrows"
            style={{ opacity: scrolled ? 0 : 1, transition: "all 1s" }}
            onClick={() => {
              const y = summaryRef.current.getBoundingClientRect().top;
              const offset = window.screen.availWidth > 1000 ? 120 : 0;
              const windowScroll = window.scrollY;
              window.scrollTo({
                top: y + windowScroll - offset,
                behavior: "smooth",
              });
            }}
          >
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </header>
      <div ref={bioContainerRef}>
        <BioComponent />
      </div>
      <hr className="divider" ref={dividerExperienceRef} />
      <div className="About-container" ref={summaryRef}>
        <h3 className="About-byline">Summary</h3>
        <p className="About-content">
          I am a software developer with over 5 years of experience in
          professional consulting, specializing in popular frontend technologies
          and frameworks such as React and TypeScript, Angular, and Vue. <br />
          <br /> I have consulted on many different projects, including a
          Real-Time Payments app, an e-commerce platform with integrated genetic
          testing and diagnostics reporting for patients and healthcare
          providers, and administrative and reporting dashboards for financial
          institutions working to fight financial crime. <br />
          <br /> I'm passionate about creating cutting edge, intuitive user
          interfaces, and providing end-users and stakeholders with high-quality
          final products and experiences.
        </p>
      </div>
      <hr className="divider" ref={dividerExperienceRef} />
      <ResumeComponent
        experienceRef={experienceRef}
        experienceTitleRef={experienceTitleRef}
      />
      <hr className="divider" />
      <div className="About-container" ref={skillsRef}>
        <h3 className="About-byline">Skills</h3>
        <div className="About-content Skills-content">
          {/* <ul> */}
          <div>
            <strong>Languages</strong>
            <ul>
              <li>Javascript</li>
              <li>TypeScript</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
            <strong>Frameworks</strong>
            <ul>
              <li>React</li>
              <li>Angular 2+</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>SpringBoot</li>
            </ul>
            <strong>Other</strong>
            <ul>
              <li>WCAG/§508</li>
              <li>AEM, Optimizely, Episerver</li>
            </ul>
          </div>
          <div>
            <strong>Libraries</strong>
            <ul>
              <li>Redux</li>
              <li>Storybook</li>
              <li>React Testing Library, Jest, Enzyme</li>
              <li>d3.js</li>
              <li>GSAP (Green Sock Animation Platform)</li>
              <li>Sass</li>
            </ul>
            <strong>Tools</strong>
            <ul>
              <li>Git</li>
              <li>Azure</li>
              <li>Jira</li>
              <li>Figma</li>
              <li>Postman</li>
              <li>BrowserStack</li>
              <li>Confluence</li>
            </ul>
          </div>
          {/* </ul> */}
        </div>
      </div>
      <hr className="divider" />
      <div className="Contact-footer">
        <strong>kreutzerted96@gmail.com</strong>
      </div>
    </div>
  );
};

export default App;
