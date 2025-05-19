import React, { useState, useContext, createContext } from "react";

const ThemeContext = createContext();  // Create context

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);  // Use context data

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}
