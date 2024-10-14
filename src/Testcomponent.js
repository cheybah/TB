import React from "react";
import Header  from "./components/Header";



const TestComponent = () => {
return (
    <div className="text-center p-4">
        <Header/>
    {/* Other content */}
    <h1 className="text-2xl font-bold text-blue-600">This is my React test Component</h1>
    </div>
);
};

export default TestComponent;
