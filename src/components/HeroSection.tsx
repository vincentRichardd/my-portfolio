import Picture from "../images/Vincent.png";
import { motion } from "framer-motion";

const container = (delay: number = 0) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0, opacity: 1, transition: { duration: 0.5, delay: delay }

    }
});


const HeroSection = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                            Vincent Richard
                        </motion.h1>

                        <motion.span variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-4xl tracking tight text-transparent">
                            Développeur Full Stack
                        </motion.span>

                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 fontlight tracking-tighter">
                            Je suis un développeur passionné par la création de solutions innovantes, récemment diplômé en ingénierie informatique.
                            Ici, je partage mes projets, mes compétences et ma vision du développement logiciel.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-[60%]"
                            src={Picture}
                            alt="Vincent Richard" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;