import React, { useEffect, useRef } from "react";
import "./Bio.css";

import angular from "../Images/logos/angular-logo.png";
import css from "../Images/logos/css-logo.svg";
import figma from "../Images/logos/figma-logo.png";
import git from "../Images/logos/git-logo.png";
import javascript from "../Images/logos/javascript-logo.png";
import node from "../Images/logos/node-logo.png";
import reactLogo from "../Images/logos/react-logo.png";
import redux from "../Images/logos/redux-logo.png";
import sass from "../Images/logos/sass-logo.png";
import typescript from "../Images/logos/typescript-logo.png";

const logos = [
  {
    src: reactLogo,
    text: "react",
  },
  {
    src: typescript,
    text: "typescript",
  },
  {
    src: javascript,
    text: "javascript",
  },
  {
    src: css,
    text: "CSS",
  },
  {
    src: sass,
    text: "sass",
  },
  {
    src: redux,
    text: "redux",
  },
  {
    src: angular,
    text: "Angular 2+",
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
    src: node,
    text: "node.js",
  },
];

const BioComponent: React.FunctionComponent = () => {
  const bioContainerRef = useRef(null);
  const bioLeftContentRef = useRef(null);
  const bioLeftTitleRef = useRef(null);
  const bioRightRef = useRef(null);

  const firstLogoColRef = useRef(null);
  const secondLogoColRef = useRef(null);
  const thirdLogoColRef = useRef(null);

  const handleScrollTransitions = () => {
    if (
      bioContainerRef &&
      bioContainerRef.current &&
      (bioContainerRef.current as HTMLElement).getBoundingClientRect()
    ) {
      const transitionRefArray: Array<React.MutableRefObject<null>> = [
        bioRightRef,
        bioLeftContentRef,
        bioLeftTitleRef,
        firstLogoColRef,
        secondLogoColRef,
        thirdLogoColRef,
      ];
      const bioContainerRect = (
        bioContainerRef.current as HTMLElement
      ).getBoundingClientRect();
      const { top, bottom } = bioContainerRect;
      if (top - 0.75 * window.screen.availHeight < 0) {
        for (let ref of transitionRefArray) {
          if (ref && ref.current) {
            (ref.current as HTMLElement).classList.remove("loading");
          }
        }
      } else {
        for (let ref of transitionRefArray) {
          if (ref && ref.current) {
            (ref.current as HTMLElement).classList.add("loading");
          }
        }
      }

      if (top + (bottom - top) - 0.25 * window.innerHeight < 0) {
        for (let ref of transitionRefArray) {
          if (ref && ref.current) {
            (ref.current as HTMLElement).classList.add("loading");
          }
        }
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth > 689) {
      window.addEventListener("scroll", handleScrollTransitions);
      return () => {
        window.removeEventListener("scroll", handleScrollTransitions);
      };
    }
  }, []);
  return (
    <div className="Bio-container" ref={bioContainerRef}>
      <div className="Bio-left  ">
        <h3
          className="About-byline box-wrapper box-wrapper-left-bio  loading"
          ref={bioLeftTitleRef}
        >
          Bio
        </h3>
        <p
          className="About-content box-wrapper box-wrapper-left-text loading"
          ref={bioLeftContentRef}
        >
          Dedicated to the philosophy of life-long learning, I’m a software
          developer with a deep passion for JavaScript, React, CSS, and all
          things web development. The unique combination of creativity, logic,
          technology and never running out of new things to learn, drives my
          excitement and passion for web development. When I’m not at my
          computer I like to spend my time outdoors, reading, and creating art.
        </p>
      </div>
      <div className="Bio-right" ref={bioRightRef}>
        <div
          className="Bio-logos__first-col logo-wrapper logo-trans-wrapper-1 loading"
          ref={firstLogoColRef}
        >
          {logos.slice(0, 3).map((logo) => {
            return (
              <div className="Bio-logos__logo-container">
                <img className="Logo-image" src={logo.src} alt={logo.text} />
                <div>{logo.text}</div>
              </div>
            );
          })}
        </div>
        <div
          className="Bio-logos__first-col logo-wrapper logo-trans-wrapper-2 loading"
          ref={secondLogoColRef}
        >
          {logos.slice(3, 7).map((logo) => {
            return (
              <div className="Bio-logos__logo-container">
                <img className="Logo-image" src={logo.src} alt={logo.text} />
                <div>{logo.text}</div>
              </div>
            );
          })}
        </div>
        <div
          className="Bio-logos__first-col logo-wrapper logo-trans-wrapper-3 loading"
          ref={thirdLogoColRef}
        >
          {logos.slice(7).map((logo) => {
            return (
              <div className="Bio-logos__logo-container">
                <img className="Logo-image" src={logo.src} alt={logo.text} />
                <div>{logo.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BioComponent;
