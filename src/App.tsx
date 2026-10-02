import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { PerformanceProvider } from '@/context/PerformanceContext';
import AiSdrDashboard from './pages/AiSdrDashboard';

export default function App() {
  return (
    <HelmetProvider>
      <PerformanceProvider>
        <BrowserRouter>
          <Toaster richColors position="top-right" theme="dark" />
          <Routes>
            <Route path="/" element={<AiSdrDashboard />} />
            <Route path="/ai-sdr" element={<AiSdrDashboard />} />
            <Route path="/dashboard" element={<AiSdrDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </PerformanceProvider>
    </HelmetProvider>
  );
}
