"use client";

import CurrentTime from './time'

export default function index() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <footer className="section-padding-equal relative flex flex-col items-center justify-center gap-6 py-space-lg bg-gray px-2 md:px-20 py-12">
            <div className="gap-6 grid w-full grid-cols-2 gap-y-space-md text-base md:grid-cols-12">
          
                <div className="flex flex-col md:col-span-6">
                    <span className="mb-space-xs flex border-b-[1.5px] border-accent-500 pb-space-2xs font-bold tracking-base text-2xl lg:text-3xl">
                        Menu 
                    </span>
                    <ul className="flex flex-col text-sm lg:text-xl pt-3">
                        <li className="cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('home')}>Home</li>
                        <li className="md:hidden cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('techstack-small')}>Techstack</li>
                        <li className="hidden md:block cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('techstack')}>Techstack</li>
                        <li className="cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('specialization')}>Specialization</li>
                        <li className="md:hidden cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('projects-small')}>Projects</li>
                        <li className="hidden md:block cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('projects')}>Projects</li>
                        <li className="cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('awards')}>Awards</li>
                        <li className="cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out" onClick={() => scrollToSection('certificates')}>Certificates</li>
                    </ul>
                </div>
                <div className="flex flex-col md:col-span-3">
                    <span className="mb-space-xs flex border-b-[1.5px] border-accent-500 pb-space-2xs font-bold tracking-base text-2xl lg:text-3xl">
                        Socials 
                    </span>
                    <ul className="flex flex-col text-sm lg:text-xl pt-3">
                        <li className="cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out">
                            <a href="https://www.linkedin.com/in/matthewjasonganaden/" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                LinkedIn
                            </a>
                        </li>
                        <li className="cursor-pointer hover:bg-darkgray hover:border-[#383838] transition-all duration-300 ease-in-out">
                            <a href="https://github.com/MatthewGanaden" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-3">
                    <span className="mb-space-xs flex border-b-[1.5px] border-accent-500 pb-space-2xs font-bold tracking-base text-2xl lg:text-3xl">
                        Work with me
                    </span>
                    <span className="pt-3">
                        mjdganaden@gmail.com
                    </span>
                </div>
            </div>

        <div className="gap-6 grid w-full grid-cols-2 gap-y-space-md text-base md:grid-cols-12">
            <div className="flex flex-col col-span-2 md:col-span-3 lg:hidden">
                <span className="text-sm font-bold">Local time</span>
                <span className="text-sm"><CurrentTime /> Baguio City, Philippines</span>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-3 lg:hidden">
                <span className="text-sm font-bold">Availability</span>
                <span className="text-sm">Available for full-time job</span>
            </div>
            <h2 className="flex font-bold text-2xl lg:text-3xl col-span-2 md:col-span-6">
                © Matthew Ganaden <br></br>All rights reserved.
            </h2>
            <div className="hidden lg:flex flex-col md:col-span-3">
                <span className="text-xl font-bold">Local time</span>
                <span className="text-xl"><CurrentTime /> Baguio City, Philippines</span>
            </div>
            <div className="hidden lg:flex flex-col md:col-span-3">
                <span className="text-xl font-bold">Availability</span>
                <span className="text-xl">Available for full-time job</span>
            </div>
        </div>
    </footer>
    )
  }