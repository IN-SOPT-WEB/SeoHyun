import { BrowserRouter, Route, Routes } from "react-router-dom";

import Entry from "pages/Entry";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
