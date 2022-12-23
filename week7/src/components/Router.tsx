import { BrowserRouter, Route, Routes } from "react-router-dom";

import Entry from "pages/Entry";
import Write from "pages/Write";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
