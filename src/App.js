import "./App.css";
import QueryBox from "./components/query-box/query-box";
import Header from "./components/header/header";
import ResultsPanel from "./components/results-panel/results-panel";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
      <div>
        <QueryBox />
        <ResultsPanel />
      </div>
    </div>
  );
}

export default App;
