import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sportzila" element={<div>Sportzila Coming Soon</div>} />
          <Route path="/fitzilla" element={<div>Fitzilla Coming Soon</div>} />
          <Route path="/urban-iron" element={<div>Urban Iron Coming Soon</div>} />
          <Route path="/about" element={<div>About Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Coming Soon</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;