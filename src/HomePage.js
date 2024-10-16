import React, { useState, useEffect } from "react";
import Header  from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import './components/SplashScreen.css';
import Slides from "./components/Slides/Slides";


// Splash Screen Component
const SplashScreen = () => {
return (
    <div className="splash-screen w-full h-screen flex items-center justify-center bg-white-500">
    <img 
        src="https://tn.tunisiebooking.com/images/icons-menu-moteur/logo-TunisieBooking1.svg" 
        alt="Tunisie Booking Logo" 
        className="floating-logo"
    />
    </div>
);
};

const TestComponent = () => {
const [loading, setLoading] = useState(true);

// Simulate loading effect for 3 seconds
useEffect(() => {
    const timer = setTimeout(() => {
    setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
}, []);

return (
    <div className="text-center">
    {/* Show Splash Screen while loading */}
    {loading ? (
        <SplashScreen />
    ) : (
        // Main content will be shown after loading
        <>
        <Header />
        <HeroSection />
        <Slides />
        <h1 className="text-2xl font-bold text-blue-600">
            I'm  here
        </h1>
        <Footer />
        </>
    )}
    </div>
);
};

export default TestComponent;
