import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useState } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import All from "./Components/All";
import Career from "./Components/Career";
import CyberSecurity from "./Components/CyberSecurity";
import DataScience from "./Components/DataScience";
import FullStackDevelopment from "./Components/FullStackDevelopment";
import BlogDetails from "./Components/BlogDetails";
import ErrorPage from "./Components/ErrorPage";

import "./App.css";

function App() {

  const [searchTerm, setSearchTerm] =
    useState("");

  return (

    <BrowserRouter>

      <div className="app">

        <Navbar
          setSearchTerm={setSearchTerm}
        />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={
                <All
                  searchTerm={searchTerm}
                />
              }
            />

            <Route
              path="/career"
              element={
                <Career
                  searchTerm={searchTerm}
                />
              }
            />

            <Route
              path="/cyber-security"
              element={
                <CyberSecurity
                  searchTerm={searchTerm}
                />
              }
            />

            <Route
              path="/data-science"
              element={
                <DataScience
                  searchTerm={searchTerm}
                />
              }
            />

            <Route
              path="/full-stack-development"
              element={
                <FullStackDevelopment
                  searchTerm={searchTerm}
                />
              }
            />

            <Route
              path="/blog/:id"
              element={<BlogDetails />}
            />

            <Route
              path="*"
              element={<ErrorPage />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;
