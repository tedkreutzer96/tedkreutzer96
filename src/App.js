/**
 * @deprecated
 */

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

import Navbar from "./Navbar/Navbar.js";

import "./App.css";
import LinkedIn from "./Images/Linkedin-logo.png";
const App = () => {
  const [scrolled, setScrolled] = useState(false);

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

  const summaryRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceTitleRef = useRef(null);
  const dividerExperienceRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      //   console.log(
      //     experienceRef.current.getBoundingClientRect().top -
      //       window.screen.availHeight
      //   );
      //   if (
      //     experienceRef.current.getBoundingClientRect().top -
      //       window.screen.availHeight <
      //     0
      //   ) {
      //     experienceTitleRef.current.style = "position: sticky; bottom: 1000";
      //   }
      //   // console.log(window.screen);
      if (!scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0) {
        setScrolled(false);
      }
    });
  });

  const renderLogos = () => {
    for (let logo of logosArray) {
      return <img className="logo" src={logo} />;
    }
  };

  return (
    <div className="App">
      <div className="Navbar-wrapper">
        <Navbar
          summaryRef={summaryRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
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
            class="arrows"
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
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </header>
      <div className="Bio-container" ref={summaryRef}>
        <div className="Bio-left">
          <h3 className="About-byline">Bio</h3>
          <p className="About-content">
            Dedicated to the philosophy of life-long learning, I’m a software
            developer with a deep passion for JavaScript, React, CSS, and all
            things web development. The unique combination of creativity, logic,
            technology and never running out of new things to learn, drives my
            excitement and passion for web development. When I’m not at my
            computer I like to spend my time outdoors, reading, and creating
            art.
          </p>
        </div>
        <div className="Bio-right">{}</div>
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
      <div className="About-container" ref={experienceRef}>
        <h3 className="About-byline" id="experience" ref={experienceTitleRef}>
          Experience
        </h3>
        <div className="About-content">
          <div className="Experience-content-heading">
            <strong>Rightpoint</strong>
            Consultant, Software Developer
            <em>May, 2019 - July, 2024</em>
          </div>
          <ul>
            <li>J.P. Morgan Chase</li>
            <ul>
              <li>
                Designed and built accessible React components for RTP web app
                within complex CMS using AEM’s SPA editor
              </li>
              <li>
                Engineered component structures using reusable atoms to achieve
                a highly maintainable component library
              </li>
              <li>
                Collaborated with stakeholders and internal client teams to
                improve designs and application architecture
              </li>
            </ul>
            <li>RiskCanvas</li>
            <ul>
              <li>Frontend developer in small team at FinTech SaaS startup</li>
              <li>
                Led frontend effort to establish new testing paradigms for
                frontend codebase
              </li>
              <li>
                Built new components for startup anti-money laundering service
                used by global financial institutions
              </li>
              <li>
                Consumed complex data to build intuitive and user-friendly data
                visualizations
              </li>
              <li>
                Collaborated with CTO, designers, and backend developers on a
                daily basis to improve designs and functionality
              </li>
            </ul>
            <li>Abbott</li>
            <ul>
              <li>
                Lead frontend developer for client-side Cart & Checkout team,
                working with backend and design teams to enhance user experience
                and improve site load time by {">"} 40%
              </li>
              <li>
                Built §508-compliant components for Next.js e-commerce site
                using client designs and functional requirements
              </li>
              <li>
                Played major role in sprint planning, including defect triage,
                story pointing, and story refinement
              </li>
              <li>
                Consulted on architecture, accessibility (WCAG, §508), designs,
                and functionality in collaboration with stakeholders, owners,
                and contractors
              </li>
              <li>Mentored and trained two new client developers</li>
            </ul>
            <li>Raymour & Flannigan</li>
            <ul>
              <li>
                Created accessible React components for Epi-Server/Optimizely
                e-commerce site's redesign and face-lift
              </li>
              <li>
                Integrated complex animation library (GSAP) for custom
                scroll-based animations
              </li>
            </ul>
            <li>Aurora-Advocate Health</li>
            <ul>
              <li>
                Assisted development team to create new React components for
                multi-site rebrand
              </li>
              <li>
                Focus on creating new components and ensuring new designs were
                compliant with accesibility standards and guidelines
              </li>
            </ul>
          </ul>
          <div className="Experience-content-heading">
            <strong>ApprentiScope</strong>
            Co-Founder, Lead Developer & Designer
            <em>February, 2018 - May, 2019</em>
          </div>
          <ul>
            <li>
              Co-founder, designer, and developer for startup specializing in
              streamlining workforce management solutions
            </li>
            <li>
              Collaborated with Dept. of Labor domain experts to create user
              interfaces, such as reporting tools and data visualizations, to
              best support the growth of apprenticeships
            </li>
          </ul>
        </div>
      </div>
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
