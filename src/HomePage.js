import React from "react";
import Header  from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";


const TestComponent = () => {
return (
    <div className="text-center">
        <Header/>
    <HeroSection/>
    <h1 className="text-2xl font-bold text-blue-600">This is my React test Component</h1>
    <Footer/>
    </div>
);
};

export default TestComponent;
