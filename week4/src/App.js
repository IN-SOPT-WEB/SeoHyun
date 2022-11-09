import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
