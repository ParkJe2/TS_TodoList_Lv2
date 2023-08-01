import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import store from "./redux/config/configStore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
