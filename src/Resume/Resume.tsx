import "../App.css";

import React from "react";

type RESUME_COMPONENT_PROPS = {
  experienceRef: React.MutableRefObject<null>;
  experienceTitleRef: React.MutableRefObject<null>;
};

const ResumeComponent: React.FC<RESUME_COMPONENT_PROPS> = (props) => {
  const { experienceRef, experienceTitleRef } = props;
  return (
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
              Engineered component structures using reusable atoms to achieve a
              highly maintainable component library
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
              Built §508-compliant components for Next.js e-commerce site using
              client designs and functional requirements
            </li>
            <li>
              Played major role in sprint planning, including defect triage,
              story pointing, and story refinement
            </li>
            <li>
              Consulted on architecture, accessibility (WCAG, §508), designs,
              and functionality in collaboration with stakeholders, owners, and
              contractors
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
            interfaces, such as reporting tools and data visualizations, to best
            support the growth of apprenticeships
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeComponent;
