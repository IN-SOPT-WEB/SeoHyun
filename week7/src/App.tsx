import GlobalStyle from "./styles/globalStyle";
import Router from "./components/Router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};
export default App;
// import "./App.css";
// import { useState } from "react";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// function App() {
//const [history, setHistory] = useState(["hi", "me"]);
//const arrString = JSON.stringify(history);

//window.localStorage.setItem("history", arrString);

//console.log(arrString);

//   return (
//
//   );
// }

// export default App;
