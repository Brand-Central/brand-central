
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/ui/PageTransition";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy1 from "./pages/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudy2";
import CaseStudy3 from "./pages/CaseStudy3";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Add NProgress for page transitions
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  minimum: 0.1,
  speed: 300
});

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-study-1" element={<CaseStudy1 />} />
            <Route path="/case-study-2" element={<CaseStudy2 />} />
            <Route path="/case-study-3" element={<CaseStudy3 />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
