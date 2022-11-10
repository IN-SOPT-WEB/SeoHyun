import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserInfo from "./components/UserInfo";

function App() {
  const [userId, setUserId] = useState("");

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
