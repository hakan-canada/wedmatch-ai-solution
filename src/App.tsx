
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import MatchForm from "./pages/MatchForm";
import Photographers from "./pages/Photographers";
import Videographers from "./pages/Videographers";
import VendorDetail from "./pages/VendorDetail";
import Contact from "./pages/Contact";
import BecomeVendor from "./pages/BecomeVendor";
import { TopBanner } from "./components/sections/TopBanner";

function App() {
  return (
    <>
      <TopBanner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/match" element={<MatchForm />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/photographers/:id" element={<VendorDetail />} />
        <Route path="/videographers" element={<Videographers />} />
        <Route path="/videographers/:id" element={<VendorDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/become-vendor" element={<BecomeVendor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
