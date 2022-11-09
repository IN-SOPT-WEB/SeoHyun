import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<MainPage />}>
          <Route path=":userId" element={<ResultPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
