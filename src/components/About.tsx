import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import Technologies from "./Technologies";

const About = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <Technologies />
                <Portfolio />
            </div>
        </>
    );
};

export default About;