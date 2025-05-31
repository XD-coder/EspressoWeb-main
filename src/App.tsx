import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Features } from './components/Features';
import { Founders } from './components/Founders';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { RefundPolicy } from './components/RefundPolicy';
import { AllPlans } from './components/AllPlans';
import { NotFoundPage } from './components/NotFoundPage';
import { PaymentProcessing } from './components/PaymentProcessing';

function HomePage() {
  return (
    <>
      <Hero />
      <Plans />
      <Features />
      <Founders />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-100 text-white">
        <div className="fixed inset-0 bg-gradient-radial from-brown-600/10 via-transparent to-transparent pointer-events-none" />
        <CustomCursor />
        <Header />
        <main className="pt-20"> {/* Added padding-top for header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/all-plans" element={<AllPlans />} />
            <Route path="/payment" element={<PaymentProcessing />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;