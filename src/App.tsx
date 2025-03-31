import React from "react";
import "./App.css";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Navbar } from "./components/Navbar";
import { Home } from "./sections/Home";
import { Experiences } from "./sections/Experiences";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Contacts } from "./sections/Contacts";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <section id="home">
          <Home />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </Container>
    </ThemeProvider>
  );
};
