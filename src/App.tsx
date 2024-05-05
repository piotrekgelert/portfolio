import jsonData from "./assets/data.json";
import { PortfolioData } from "types";
import { Header } from "components/Header";
import { MainContent } from "components/MainContent";

import "App.css";

function App() {
  const { details, projects } = jsonData as PortfolioData;

  return (
    <div className="app">
      <Header {...details} />
      <MainContent projects={projects} />
    </div>
  );
}

export default App;
