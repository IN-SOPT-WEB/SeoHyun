import { BrowserRouter, Route, Routes } from "react-router-dom";

import Entry from "pages/Entry";
import Write from "pages/Write";
import Main from "pages/Main";
import UserInfo from "components/UserInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Entry />} />
        <Route path="/write" element={<Write />} /> */}
        <Route path="/search" element={<Main />}>
          <Route path=":userId" element={<UserInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
