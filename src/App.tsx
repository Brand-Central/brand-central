
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import DynamicPage from "./pages/DynamicPage";

// Admin Pages
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Pages from "./pages/admin/Pages";
import PageEditor from "./pages/admin/PageEditor";
import Subscribers from "./pages/admin/Subscribers";
import Users from "./pages/admin/Users";
import ContactSubmissions from "./pages/admin/ContactSubmissions";
import CreateFirstPage from "./pages/admin/CreateFirstPage";

// Add NProgress for page transitions
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  minimum: 0.1,
  speed: 300
});

// Progress bar component
const ProgressBar = () => {
  const location = useLocation();
  
  useEffect(() => {
    NProgress.start();
    
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500);
    
    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [location]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <BrowserRouter>
          <ProgressBar />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="pages" element={<Pages />} />
              <Route path="pages/new" element={<PageEditor />} />
              <Route path="pages/edit/:id" element={<PageEditor />} />
              <Route path="pages/create-first" element={<CreateFirstPage />} />
              <Route path="subscribers" element={<Subscribers />} />
              <Route path="users" element={<Users />} />
              <Route path="contact-submissions" element={<ContactSubmissions />} />
            </Route>
            
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <Header />
                <PageTransition>
                  <Index />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/services" element={
              <>
                <Header />
                <PageTransition>
                  <Services />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/case-studies" element={
              <>
                <Header />
                <PageTransition>
                  <CaseStudies />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/case-study-1" element={
              <>
                <Header />
                <PageTransition>
                  <CaseStudy1 />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/case-study-2" element={
              <>
                <Header />
                <PageTransition>
                  <CaseStudy2 />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/case-study-3" element={
              <>
                <Header />
                <PageTransition>
                  <CaseStudy3 />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/how-it-works" element={
              <>
                <Header />
                <PageTransition>
                  <HowItWorks />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <PageTransition>
                  <Contact />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="/:slug" element={
              <>
                <Header />
                <PageTransition>
                  <DynamicPage />
                </PageTransition>
                <Footer />
              </>
            } />
            <Route path="*" element={
              <>
                <Header />
                <PageTransition>
                  <NotFound />
                </PageTransition>
                <Footer />
              </>
            } />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
