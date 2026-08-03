import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import ServicesPage from './ServicesPage.jsx';
import CaseStudyPage from './CaseStudyPage.jsx';
import AboutPage from './AboutPage.jsx';
import FittingWizardPage from './FittingWizardPage.jsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/work" element={<CaseStudyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/products/fitting-wizard" element={<FittingWizardPage />} />
      {/* Only one product today - /products lands on it rather than 404ing. */}
      <Route path="/products" element={<Navigate to="/products/fitting-wizard" replace />} />
      {/* Vercel rewrites every path to index.html, so unknown URLs reach the
          router - send them home instead of rendering a blank page. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
