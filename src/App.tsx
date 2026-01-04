import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import VissperLanding from "./pages/VissperLanding";
import MalfiLanding from "./pages/MalfiLanding";
import MalfiPrivacy from "./pages/MalfiPrivacy";
import MalfiSupport from "./pages/MalfiSupport";
import MalfiTerms from "./pages/MalfiTerms";
import MusicLanding from "./pages/MusicLanding";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import ThankYou from "./pages/ThankYou";
import Download from "./pages/Download";
import Blog from "./pages/Blog";
import BlogArchive from "./pages/BlogArchive";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vissper" element={<VissperLanding />} />
            <Route path="/vissper/download" element={<Download />} />
            <Route path="/malfi" element={<MalfiLanding />} />
            <Route path="/malfi/privacy" element={<MalfiPrivacy />} />
            <Route path="/malfi/support" element={<MalfiSupport />} />
            <Route path="/malfi/terms" element={<MalfiTerms />} />
            <Route path="/music" element={<MusicLanding />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/archive" element={<BlogArchive />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
