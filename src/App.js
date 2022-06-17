import "./App.css";
import HomePage from "./components/pages/home-page/home-page";

function App() {
  let queryParams = new URLSearchParams(window.location.search);
  let queryString = queryParams.get("search");
  console.log("queryString", queryString, "queryParams", queryParams);
  // console.log("window.location.search", window.location);
  return (
    <div className="h-screen">
      <HomePage />
    </div>
  );
}

export default App;
