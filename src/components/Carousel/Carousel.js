import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import the styles for Splide
import './carousel.css'; 

const Carousel = () => {
return (
<>
<div>
    <h1 className="text-center font-bold text-2xl antialiased mo"> Nos Plus Belles Thématiques
    </h1>
</div>
<Splide
    options={{
        type: 'loop',
        perPage: 3, 
        focus: 'center', // Focus on the center item
        autoplay: true, // Automatically plays the slides
        interval: 3000, // Increased interval (3 seconds)
        speed: 900, // Transition speed for smoothness
        pauseOnHover: true, 
        flickMaxPages: 1, 
        updateOnMove: true,
        pagination: false,
        padding: '10%', 
        breakpoints: {
        1440: {
            perPage: 1, // Show 1 image for smaller screens
            padding: '30%',
        },
        },
    }}
    >
    <SplideSlide>
        <img src="/istanbul-min.jpg" alt="Istanbul" className="carousel-image" />
    </SplideSlide>
    <SplideSlide>
        <img src="/beach-min.jpg" alt="Beach" className="carousel-image" />
    </SplideSlide>
    <SplideSlide>
        <img src="/resort-min.jpg" alt="Resort" className="carousel-image" />
    </SplideSlide>
    <SplideSlide>
        <img src="/omra-min.jpg" alt="Omra" className="carousel-image" />
    </SplideSlide>
    </Splide></>
);
};

export default Carousel;