import "./App.css";
import LinkedIn from "./Images/Linkedin-logo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ted Kreutzer</h1>
        <h3 className="App-byline">
          Software Developer with 5+ years of experience in front-end
          development
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
          Lorem IpsumLabore adipisicing cillum occaecat voluptate sint Lorem
          Lorem aute nostrud. Ipsum est irure laboris ullamco dolore ullamco
          nisi consequat aliqua qui occaecat. Fugiat dolor et cillum commodo
          tempor incididunt nisi velit proident eiusmod amet mollit cillum. Do
          aliqua irure non eiusmod eu fugiat ea. Aliqua dolore ex nulla elit
          incididunt excepteur tempor in labore amet pariatur aliqua deserunt
          magna. Duis in ea excepteur ea duis esse nostrud eu quis occaecat
          dolore.
        </p>
      </div>
    </div>
  );
}

export default App;
