import { Route, Routes } from "react-router-dom";
import IndonesiaPage from "./pages/IndonesiaPage";
import ProgrammingPage from "./pages/ProgrammingPage";
import CovidPage from "./pages/CovidPage";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndonesiaPage />} />
      <Route path="/programming" element={<ProgrammingPage />} />
      <Route path="/covid19" element={<CovidPage />} />
      <Route path="/saved" element={<SavedPage />} />
      <Route path="/search/:q" element={<SearchPage />} />
    </Routes>
  );
};

export default App;
