import React, { useState } from "react";
import { Headers } from "./pages/Headers";
import { Mains } from "./pages/Mains";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Cards } from "./pages/Cards";
import { Footer } from "./pages/Footer";
import ThemeContext from "./ThemeContext";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
  });

function App() {
  const [mode, setMode] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme: () => setMode(mode === "light" ? "dark" : "light"),
      }}
    >
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />
        <Headers />
        <Mains />
        <Cards />
        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
