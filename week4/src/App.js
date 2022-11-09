import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<MainPage />}>
          <Route path=":userId" element={<UserInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
