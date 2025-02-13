import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        title: "Stage en développement logiciel",
        company: "GIRO",
        date: "Mai - Août 2024",
        description:
            `Dans une équipe de 8, participation active aux étapes de conception et de développement de fonctionnalités du logiciel de gestion 
            et d’optimisation des bus, métro et rail, utilisé par des opérateurs à travers le monde. Diriger le développement et l’implémentation de
            nouvelles fonctionnalités optimisées dans les applications ainsi que la mise en place de Google Test. Concevoir des algorithmes de 
            performance et utilisation du benchmarking pour identifier et résoudre les goulots d’étranglement, améliorant ainsi l’efficacité du code.`,
        technologies: ["C++", "PostgresSQL", "GoogleTest", "GIT"]
    },
    {
        id: 2,
        title: "Stage en développement backend",
        company: "Ubisoft",
        date: "Jan - Mai 2023",
        description:
            `Dans une équipe de 5, diriger le développement d’un service pour automatiser les règles du firewall 
            utilisés par les équipes internes.Organiser et concevoir une base de données dans le Cloud AWS. 
            Déploiement du service sous un environnement de développement afin de tester avant de le mettre en production. 
            Utilisation de jetons d’autorisation pour restreindre l’accès à l’API aux seules personnes autorisées.`,
        technologies: ["Golang", "PostgresSQL", "GoogleTest", "RestFul API", "GIT", "AWS", "Docker"]
    },
    {
        id: 3,
        title: "Stage en développement web",
        company: "Ville de Montréal",
        date: "Mai - Août 2022",
        description: `Diriger le développement d’une plateforme intégrée pour suivre en temps réel l’état du réseau WIFI partout à Montréal. 
        Accroître la performance des outils de gestion et maximiser l’automatisation des tâches. 
        Gérer le projet et organiser des rencontres hebdomadaires entre plusieurs équipes pour le suivit du projet.`,
        technologies: ["Angular", "Typescript", "Python", "Flask", "GIT"]
    }
];

const ExperienceTimeline = () => {
    return (
        <section id="experiences" className="mt-20 p-6 ">
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Expériences professionnelles
            </motion.h1>

            <div>
                {experiences.map((exp) => (
                    <div key={exp.id} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">
                                {exp.date}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">

                            <h6 className="mb-2 font-semibold">
                                {exp.title} - <span className="text-sm text-purple-100">{exp.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {exp.description}
                            </p>
                            {exp.technologies.map((tech) => (
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

export default ExperienceTimeline;
