import "./App.css";
import LinkedIn from "./Images/Linkedin-logo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ted Kreutzer</h1>
        <h3 className="App-byline">Software Developer with 5+ years of experience in front-end development</h3>
        <a
          href="https://www.linkedin.com/in/ted-kreutzer/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="Logo-image" src={LinkedIn} alt="LinkedIn Logo" />
        </a>
      <p className="App-footer">more coming soon</p>
      </header>
    </div>
  );
}

export default App;
