'use client';

import { menuSlide, slide } from './anim';
import { motion } from 'framer-motion';

export default function Index() {
    const navItems = [
        { title: "Home", sectionId: "home" },
        { title: "Techstack", sectionIds: ["techstack", "techstack-small"] },
        { title: "Specialization", sectionId: "specialization" },
        { title: "Projects", sectionIds: ["projects", "projects-small"] },
        { title: "Awards", sectionId: "awards" },
        { title: "Certificates", sectionId: "certificates" },
    ];

    // Function to check if an element is visible
    const isElementVisible = (elementId) => {
        const element = document.getElementById(elementId);
        if (!element) return false;

        const style = window.getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    };

    // Function to handle smooth scrolling to the visible section
    const scrollToSection = (sectionIds) => {
        if (Array.isArray(sectionIds)) {
            // Loop through the sectionIds to find the visible one
            for (const sectionId of sectionIds) {
                if (isElementVisible(sectionId)) {
                    scrollToVisibleSection(sectionId);
                    break;
                }
            }
        } else {
            scrollToVisibleSection(sectionIds);
        }
    };

    // Function to scroll to the visible section
    const scrollToVisibleSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 100; // Adjust the offset as needed
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className="fixed top-0 right-0 h-screen w-screen md:w-1/2 lg:w-[500px] bg-[#323232] text-white border-l-[1.5px] border-[#383838]"
        >
            <div className="flex flex-col gap-3 mt-[60px]">
                <motion.div
                    variants={slide}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    className="font-bold border-t-[1.5px] border-b-[1.5px] text-3xl md:text-4xl border-[#383838] py-2 px-12"
                >
                    <p>Navigation</p>
                </motion.div>

                {navItems.map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={slide}
                        className="cursor-pointer no-underline text-white font-light pl-24 pr-72 text-2xl md:text-3xl hover:bg-darkgray hover:border-[#383838] transition-colors duration-300 ease-in-out"
                        onClick={() => scrollToSection(item.sectionIds || item.sectionId)} // Check for array or single id
                    >
                        <span>{item.title}</span>
                    </motion.div>
                ))}

                <div className="absolute bottom-12 grid grid-cols-2 py-2 px-12 gap-3">
                    <div className="grid grid-cols-2 grid-rows-2 gap-1">
                        <p className="font-bold col-span-2 flex border-b-[1.5px] border-[#383838]">Socials</p>
                        <span className="hover:bg-darkgray hover:border-[#383838] transition-colors duration-300 ease-in-out"><a href="https://github.com/MatthewGanaden" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                Github
                            </a></span>
                        <span className="hover:bg-darkgray hover:border-[#383838] transition-colors duration-300 ease-in-out"><a href="https://www.linkedin.com/in/matthewjasonganaden/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                LinkedIn
                            </a></span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold flex border-b-[1.5px] border-[#383838]">Email</p>
                        <span className="">mjdganaden@gmail.com</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
