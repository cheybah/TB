const HeroSection = () => {
return (
    <section className="relative h-[60vh] overflow-hidden"> {/* Set section height to match video */}
    {/* Video Background */}
    <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full" 
    >
        <source src="/tunisiebooking.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-40"></div>

    {/* Content */}
    </section>
);
};

export default HeroSection;

