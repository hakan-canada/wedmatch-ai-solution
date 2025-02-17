
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import MatchForm from "./pages/MatchForm";
import Photographers from "./pages/Photographers";
import Videographers from "./pages/Videographers";
import VendorDetail from "./pages/VendorDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/match" element={<MatchForm />} />
      <Route path="/photographers" element={<Photographers />} />
      <Route path="/photographers/:id" element={<VendorDetail />} />
      <Route path="/videographers" element={<Videographers />} />
      <Route path="/videographers/:id" element={<VendorDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
