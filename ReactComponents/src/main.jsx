import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import SideMenu from './Components/NavBars/SideMenu'
import HomePage from '../src/Components/Pages/HomePage'
import SettingsPage from '../src/Components/Pages/SettingsPage'
import SendMessagePage from "./Components/Pages/SendMessagePage";
import ContactPage from "./Components/Pages/ContactPage";
import SearchPage from "./Components/Pages/SearchPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideMenu />} />
      <Route path="/homepage" element={<HomePage/>}></Route>
      <Route path="/sendmessage" element={<SendMessagePage/>}></Route>
      <Route path="/searchpage" element={<SearchPage/>}></Route>
      <Route path="/contactpage" element={<ContactPage/>}></Route>
      <Route path="/settingspage" element={<SettingsPage/>}></Route>
    </Routes>
  </BrowserRouter>
);
