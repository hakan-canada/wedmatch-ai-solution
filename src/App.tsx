
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import MatchForm from "./pages/MatchForm";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/match" element={<MatchForm />} />
      <Route path="/vendors" element={<Vendors />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
