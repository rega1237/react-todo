import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import TodoContainer from "./functionBased/components/TodoContainer";
import './styles/index.css';
import NotMatch from "./functionBased/pages/NotMatch";
import About from "./functionBased/pages/About";
import Navbar from "./functionBased/components/Navbar";
import SinglePage from "./functionBased/pages/SinglePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="About" element={<About />}>
        <Route path=":abt" element={<SinglePage />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);