import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./themeProvider/ThemeProvider";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/Home" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
