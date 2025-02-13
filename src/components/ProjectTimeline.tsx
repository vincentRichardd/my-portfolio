import { motion } from "framer-motion"
import Workout from "../images/workout.jpg";
import RobotMapping from "../images/robot-mapping.png"
import Scrabble from "../images/Scrabble.png"


const projects = [
    {
        id: 1,
        title: "Application mobile pour suivis d’entrainements",
        description:
            `En équipe de 6, développer une application mobile et une application web pour le suivi des performances d’entraînement
            avec optimisation des algorithmes de traitement des données. Coordonner l’équipe en gérant la planification des tâches 
            pour la conception de la solution de la base de donnée. Concevoir un système pour entraîneurs et athlètes avec authentification 
            Google Firebase ainsi qu’une optimisation des requêtes PostgreSQL pour haute performance.`
        ,
        pictureUrl: Workout,
        technologies: ["React", "React Native", "Firebase", "PostgresSQL"]
    },
    {
        id: 2,
        title: "Cartographie robotique",
        description:
            `En équipe de 6, programmation de deux robots et leurs capteurs afin qu’ils puissent se déplacer de manière autonome
            tout en cartographiant leur trajet respectif. Gérer la conception d’un serveur permettant de gérer en temps réel les 
            informations reçues et envoyées vers les robots. Diriger la mise en place d’un environnement de simulation pour tester 
            le comportement des robots. Gérer la communication entre les 3 sous équipes et l’avancement du projet. 
            Implémentation d’un serveur facilitant la communication entre les robots, les clients et la base de données`,
        pictureUrl: RobotMapping,
        technologies: ["C++", "TypeScript", "MongoDB", "Git", "Docker", "Ubuntu"]
    },
    {
        id: 3,
        title: "Scrabble",
        description:
            `Diriger une équipe de 6 personnes à concevoir et déployer un jeu de Scrabble interactif multijoueur. 
            Élaborer et concevoir un système de communication par WebSockets entre les joueurs. Concevoir des algorithmes 
            utilisant des arbres binaires afin de créer un joueur virtuel avec plusieurs difficultés.`
        ,
        pictureUrl: Scrabble,
        technologies: ["Angular", "TypeScript", "MongoDB", "Git", "WebSockets"]
    },
];

const ProjectTimeline = () => {
    return (
        <section id="projects" className="border-b border-neutral-900 pb-4">
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Mes Projets</motion.h2>
            <div>
                {projects.map((project) => (
                    <div key={project.id} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                width={200}
                                height={200}
                                src={project.pictureUrl}
                                alt={project.title}
                                className="mb-6 rounded" />
                        </motion.div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech) => (
                                <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default ProjectTimeline;
