import { RiReactjsLine } from 'react-icons/ri'
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoDocker } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";

import { motion } from 'framer-motion';

const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as "reverse",
        }
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="text-4xl text-center my-20" >Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap justify-center items-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 broder-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 broder-neutral-800 p-4">
                    <SiSpringboot className='text-7xl text-green-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 broder-neutral-800 p-4">
                    <RiNodejsLine className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 broder-neutral-800 p-4">
                    <BiLogoPostgresql className='text-7xl text-sky-700' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 broder-neutral-800 p-4">
                    <BiLogoDocker className='text-7xl text-blue-600' />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;