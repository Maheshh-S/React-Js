import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";

function App() {

  const [themeMode, setThemeMode] = useState("light");

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* <ThemeSwitcher /> */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Vcard */}
            </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
