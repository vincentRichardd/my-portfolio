import ExperienceTimeline from "./ExperienceTimeline";
import ProjectTimeline from "./ProjectTimeline";
import { motion } from "framer-motion";

const Portfolio = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section >
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Portfolio
                </h1>

                <p className="mt-4 text-center text-gray-500 dark:text-gray-300 text-1xl">
                    Découvrez ici mes expériences de stage et mes projets, illustrant mon évolution et mes compétences en développement.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
                    <div
                        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')]"
                        onClick={() => scrollToSection("experiences")}
                    >
                        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Expériences professionnelles / Stages</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">Professional experiences / Internships</p>
                        </div>
                    </div>

                    <div
                        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://www.codingdojo.com/blog/wp-content/uploads/begincoding.jpg.webp')]"
                        onClick={() => scrollToSection("projects")}
                    >
                        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Mes projets</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">My projects</p>
                        </div>
                    </div>
                </div>

                {/* Sections cibles */}
                <div id="experiences" className="mt-20 p-6">
                    <ExperienceTimeline />
                </div>

                <div id="projects" className="mt-20 p-6">
                    <ProjectTimeline />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
