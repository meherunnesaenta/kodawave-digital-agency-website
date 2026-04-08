import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    FaRocket,
    FaCheckCircle,
    FaShieldAlt,
    FaBullseye
} from 'react-icons/fa';

// AnimatedSection component for scroll-triggered animations
const AnimatedSection = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                {
                    icon: FaRocket,
                    title: "Fast Delivery",
                    desc: "Quick turnaround without compromising quality",
                    gradient: "from-orange-500 to-red-500"
                },
                {
                    icon: FaCheckCircle,
                    title: "Quality Assurance",
                    desc: "Rigorous testing and quality checks",
                    gradient: "from-green-500 to-emerald-500"
                },
                {
                    icon: FaShieldAlt,
                    title: "Secure Solutions",
                    desc: "Enterprise-grade security standards",
                    gradient: "from-blue-500 to-cyan-500"
                },
                {
                    icon: FaBullseye,
                    title: "Results Driven",
                    desc: "Focused on achieving your business goals",
                    gradient: "from-purple-500 to-pink-500"
                }
            ].map((benefit, index) => {
                // For 3D tilt effect
                const x = useMotionValue(0);
                const y = useMotionValue(0);

                const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
                const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

                const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
                const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

                const handleMouseMove = (e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const width = rect.width;
                    const height = rect.height;
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    const xPct = mouseX / width - 0.5;
                    const yPct = mouseY / height - 0.5;
                    x.set(xPct);
                    y.set(yPct);
                };

                const handleMouseLeave = () => {
                    x.set(0);
                    y.set(0);
                };

                return (
                    <AnimatedSection key={index} delay={index * 0.1}>
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            whileHover={{
                                y: -8,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17
                                }
                            }}
                            className="relative group text-center p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-base-200 hover:border-primary/20"
                        >
                            {/* Background gradient that appears on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Animated shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 gap-4 to-transparent opacity-0 group-hover:opacity-100"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />

                            {/* Icon with 3D hover effect */}
                            <motion.div
                                className="relative mb-5 inline-flex"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "translateZ(20px)"
                                }}
                            >
                                <div className='px-4'>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                                        <benefit.icon className="text-2xl" />
                                    </div>
                                </div>

                                {/* Glow effect behind icon */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 to-secondary/50 blur-xl -z-10"
                                    whileHover={{
                                        scale: 1.2,
                                        opacity: 0.6
                                    }}
                                />
                            </motion.div>

                            {/* Title with animated underline */}
                            <motion.h3
                                className="text-xl font-bold mb-3 text-base-content relative inline-block"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "translateZ(15px)"
                                }}
                            >
                                {benefit.title}
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                                    initial={{ width: 0, opacity: 0 }}
                                    whileHover={{ width: "100%", opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-base-content/60 text-sm leading-relaxed"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "translateZ(10px)"
                                }}
                            >
                                {benefit.desc}
                            </motion.p>

                            {/* Corner decoration */}
                            <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full" />
                                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-secondary rounded-full" />
                            </div>
                        </motion.div>
                    </AnimatedSection>
                );
            })}
        </div>
    );
};

export default About;