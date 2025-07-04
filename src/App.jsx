import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { LanguageProvider } from './context/LanguageContext';
import TravelServices from './pages/travelServices/TravelServices'; // Import the new page component
import { LandingPage } from './pages/landingPage/LandingPage';
import { LocationProvider } from './context/LocationContext';

function App() {
  return (
    <LanguageProvider>
      <LocationProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Home page route */}
            <Route path="/" element={
              <>
                <LandingPage />
              </>
            } />

            {/* Travel Services page route */}
            <Route path="/travel-services" element={<TravelServices />} />

            {/* You can add more routes here as needed */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </LocationProvider>
    </LanguageProvider>
  );
}

export default App;
