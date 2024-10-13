'use client';

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import locomotiveScroll from "locomotive-scroll";
import { motion, Variants, useScroll, useTransform, useSpring } from "framer-motion"

import Project from './components/project';
import Modal from './components/modal';

//import Preloader from './components/preloader'

const awards = [
	{
	  title: "Philippine Start-up Challenge (PSC) 2021 Regional Champion",
	  href: "https://www.facebook.com/photo?fbid=124150950183349&set=pcb.124151813516596",
	  src: "Bailee.png",
	  date: "2021",
	  color: "#323232"
	},
	{
	  title: "AMY IP Awards 2023 Finalist",
	  href: "https://www.facebook.com/photo/?fbid=338122131917540&set=a.196358472760574",
	  src: "AMY.jpg",
	  date: "2023",
	  color: "#8C8C8C"
	},
	{
	  title: "Philippine Start-up Challenge (PSC) 2023 Regional Finalist",
	  href: "https://www.facebook.com/photo/?fbid=341555631778926&set=pcb.341560141778475",
	  src: "Beehive.jpg",
	  date: "2023",
	  color: "#EFE8D3"
	},
]

const certificates = [
	{
	  title: "Foundations of User Experience (UX) Design",
	  href: "https://www.coursera.org/account/accomplishments/verify/KDNQ6KNQVRQ9",
	  src: "Certificate_Google.png",
	  date: "2021",
	  color: "#323232"
	},
	{
	  title: "Fundamentals of Deep Learning",
	  href: "https://learn.nvidia.com/certificates?id=NoZPUZ5GSNm6f0vwrQRO_Q",
	  src: "Certificate_Nvidia.png",
	  date: "2023",
	  color: "#8C8C8C"
	},
]

const upperSquare: Variants = {
	offscreen: {
		y: 272,
		opacity: 0, // Add fade-out for a smoother exit
	},
	onscreen: {
		y: 0,
		opacity: 1, // Add fade-in for a smoother entrance
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 1,
		}
	}
};

const lowerSquare: Variants = {
	offscreen: {
		y: -272,
		opacity: 0, // Add fade-out for a smoother exit
	},
	onscreen: {
		y: 0,
		opacity: 1, // Add fade-in for a smoother entrance
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 1,
		}
	}
};

const cards: Variants = {
	offscreen: {
		y: -50,
		opacity: 0, // Add fade-out for a smoother exit
	},
	onscreen: {
		y: 0,
		opacity: 1, // Add fade-in for a smoother entrance
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 1,
		}
	}
};

/*const editEffect: Variants = {
	offscreen: {
		y: -50,
		opacity: 0, // Fades out
		scale: 0,   // Start at 0% scale
	},
	onscreen: {
		y: 0,
		opacity: 1, // Fades in
		scale: 1,   // Scale to 100%
		transition: {
			type: "spring",
			bounce: 0.3,
			duration: 1, // Adjust this as needed for speed
		}
	}
};*/


export default function Home() {
	const scrollRef = React.createRef();
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

	{/** modal for projects section */}
	const [modal, setModal] = useState({active: false, index: 0})

	const [modal2, setModal2] = useState({active: false, index: 0})

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.01
	});

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading delay (e.g., for fetching resources)
		const timer = setTimeout(() => {
		  setIsLoading(false); // Stop loading after the simulated delay
		}, 3000); // 3 seconds delay (or adjust accordingly)
	
		// Only initialize Locomotive Scroll after loading is complete
		if (!isLoading) {
		  const scroll = new locomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		  });
	
		  return () => {
			// Clean up Locomotive Scroll instance on component unmount
			scroll.destroy();
		  };
		}
	
		return () => clearTimeout(timer); // Clean up timer on component unmount
	  }, [isLoading]); // Include isLoading in the dependency array
	

	return (
		<div>
			{/*{isLoading ? (
        		<Preloader /> // Show preloader while loading
      		) : (*/}
				<div className="py-16" ref={scrollRef}>
			
					{/* Hero Secion */}
					<section id="home" className="grid lg:grid-cols-2 mx-2 md:mx-32 h-[calc(100vh-5rem)] items-center justify-center">
						
						<div className="w-5/6">
							<h1 className="text-4xl lg:text-5xl font-bold leading-[1.2]">
								MATTHEW GANADEN
							</h1>
							<span className="lg:text-3xl ">I like to challenge myself through developing websites, enhancing my skills and satisfying client needs and requirements</span>
						</div>

						<div className="bg-gray-500 mt-10 rounded w-full h-3/4 flex items-end justify-center">
							<Image
								src="/face.svg"
								width={877}
								height={733}
								alt="Picture of the author"
								className="w-full"
							/>
						</div>

					</section>

					<div className="mx-2 md:mx-36 lg:mx-64">
						{/* Techstack Secion for sm and md */}
						<section id="techstack-small" className="flex flex-col gap-2 items-center justify-items-center mx-auto md:hidden">
							<div className="bg-gray  w-full z-10 flex rounded items-center justify-center">
								<h2 className="text-3xl md:text-4xl font-bold text-center w-3/4 leading-[1.2] py-6">These are the technologies I use</h2>
							</div>
							<motion.div 
								className="grid grid-cols-4 grid-rows-4 gap-2 items-center"
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								variants={{
									offscreen: {},
									onscreen: {
										transition: {
											staggerChildren: 0.02, // Adjust delay between each child animation
										}
									}
								}}
							>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/HTML.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/CSS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full fl ex items-center justify-centercol-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/JS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/Tailwind.svg" width={1000} height={1000} alt="Picture of the author" className="w-full" />
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/React.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/PS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2"variants={lowerSquare}>
									<Image src="/Figma.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-1" variants={lowerSquare}>
									<Image src="/Vue.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/AE.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/PR.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
							</motion.div>

							<motion.div 
								className="grid grid-cols-4 grid-rows-4 gap-2 items-center" 
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								variants={{
									offscreen: {},
									onscreen: {
										transition: {
											staggerChildren: 0.02, // Adjust delay between each child animation
										}
									}
								}}
							>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/NodeJS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/PHP.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/Java.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/Python.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/C.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/C++.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Git.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Wordpress.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/Selenium.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Firebase.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Arduino.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
							</motion.div>
						</section>

						{/* Techstack Secion */}
						<section id="techstack" className="hidden md:grid grid-rows-3 gap-6 items-center justify-items-center my-20 mx-auto">
							<motion.div 
								className="grid grid-cols-10 grid-rows-2 gap-6 items-center"
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								variants={{
									offscreen: {},
									onscreen: {
										transition: {
											staggerChildren: 0.02, // Adjust delay between each child animation
										}
									}
								}}
							>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={upperSquare}>
									<Image src="/HTML.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={upperSquare}>
									<Image src="/CSS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full fl ex items-center justify-centercol-span-1 row-span-1" variants={upperSquare}>
									<Image src="/JS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={upperSquare}>
									<Image src="/Tailwind.svg" width={1000} height={1000} alt="Picture of the author" className="w-full" />
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={upperSquare}>
									<Image src="/React.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={upperSquare}>
									<Image src="/PS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2"variants={upperSquare}>
									<Image src="/Figma.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-1" variants={upperSquare}>
									<Image src="/Vue.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={upperSquare}>
									<Image src="/AE.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={upperSquare}>
									<Image src="/PR.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
							</motion.div>
								
							<div className="bg-gray h-full w-full z-10 flex rounded items-center justify-center">
								<h2 className="text-4xl font-bold text-center">These are the technologies I use</h2>
							</div>

							<motion.div 
								className="grid grid-cols-10 grid-rows-2 gap-6 items-center" 
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								variants={{
									offscreen: {},
									onscreen: {
										transition: {
											staggerChildren: 0.02, // Adjust delay between each child animation
											staggerDirection: -1     // Reverse the stagger direction
										}
									}
								}}
							>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/NodeJS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/Java.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/Python.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/C.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-2 row-span-2" variants={lowerSquare}>
									<Image src="/Selenium.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Git.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Wordpress.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/PHP.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/C++.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Firebase.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={lowerSquare}>
									<Image src="/Arduino.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
								</motion.div>
							</motion.div>
						</section>

						{/* Specialization Secion */}
						<section id="specialization" className="flex flex-col gap-3 lg:gap-16 items-center w-full py-20">
							<span className="flex items-center justify-center">
								<h2 className="text-3xl lg:text-4xl font-bold leading-[1.2]">What I specialize</h2>
							</span>
							<motion.div 
								className="hidden lg:grid md:grid-cols-3 gap-3 md:gap-6 items-center w-full"
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								variants={{
									offscreen: {},
									onscreen: {
										transition: {
											staggerChildren: 0.2, // Adjust delay between each child animation
										}
									}
								}}
							>
								<motion.div className="w-full" variants={cards}>
									<Image src="/Card_1.svg" width={426} height={534} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="w-full" variants={cards}>
									<Image src="/Development.svg" width={426} height={534} alt="Picture of the author" className="w-full"/>
								</motion.div>
								<motion.div className="w-full" variants={cards}>
									<Image src="/Testing.svg" width={426} height={534} alt="Picture of the author" className="w-full"/>
								</motion.div>
							</motion.div>
							<div 
								className="grid md:grid-cols-3 gap-3 md:gap-6 items-center w-full lg:hidden"
							>
								<div className="w-full">
									<Image src="/Card_1.svg" width={426} height={534} alt="Picture of the author" className="w-full"/>
								</div>
								<div className="w-full">
									<Image src="/Card_1.svg" width={426} height={534} alt="Picture of the author" className="w-full"/>
								</div>
								<div className="w-full">
									<Image src="/Card_1.svg" width={426} height={534} alt="Picture of the author" className="w-full"/>
								</div>
							</div>
						</section>

						{/* Project Section */}
						<section id="projects" ref={targetRef} className="hidden md:block relative h-[350vh]">
							<div className="sticky top-5 h-screen flex items-center">
								<div className="flex bg-gray rounded h-[calc(100vh-12rem)] w-full items-center justify-center relative overflow-hidden"> {/* Use overflow-hidden */}
								
								{/* This blue div will act as a progress indicator or similar effect */}
								<motion.div 
									style={{ scaleX }} 
									className="absolute bottom-0 left-0 bg-blue w-full h-2 z-10" // Adjusted to bottom-0 for clipping
								></motion.div>
								
								{/* cards */}
								<motion.div style={{ x }} className="flex h-full w-full items-center justify-center">
									<motion.div className="flex items-center justify-center w-full shrink-0 relative" initial="offscreen"
									whileInView="onscreen"
									viewport={{ once: true, amount: 0.8 }}
									variants={{
										offscreen: {},
										onscreen: {
											transition: {
												staggerChildren: 0.02, // Adjust delay between each child animation
											}
										}
									}}>
										{/* Centered text */}
										<div className="absolute inset-0 flex flex-col items-center justify-center bg-gray">

											<motion.h2 className="text-white text-4xl font-bold" variants={cards}>My Projects</motion.h2>
										</div>
									</motion.div>

									<motion.div className="flex items-center justify-center w-full shrink-0 relative" initial="offscreen"
									whileInView="onscreen"
									viewport={{ once: true, amount: 0.8 }}
									variants={{
										offscreen: {},
										onscreen: {
											transition: {
												staggerChildren: 0.02, // Adjust delay between each child animation
											}
										}
									}}>
										{/* Centered text */}
										<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
		
											<div className="relative z-10 flex flex-col items-center justify-center">
												<motion.h2 className="text-white text-4xl font-bold" variants={cards}>DDStudios</motion.h2>
												<motion.h3 className="text-white text-xl" variants={cards}>digital marketing agency</motion.h3>
												<motion.h4 className="text-white text-sm font-bold" variants={cards}>(WordPress)</motion.h4>
												<motion.a href="https://ddstudiosph.com" target="_blank" rel="noopener noreferrer" className="m-5 bg-blue w-32 h-10 flex items-center justify-center rounded hover:bg-[#0D66D0] transition-colors duration-300 ease-in-out" variants={cards}>View</motion.a>
											</div>
										</div>
										<div className="absolute inset-0 bg-black opacity-30">
											
										</div>
										<Image src="/DDstudios.png" width={1920} height={1080} alt="Picture of the author" className="w-full" />
									</motion.div>

									<motion.div className="flex items-center justify-center w-full shrink-0 relative" initial="offscreen"
									whileInView="onscreen"
									viewport={{ once: true, amount: 0.8 }}
									variants={{
										offscreen: {},
										onscreen: {
											transition: {
												staggerChildren: 0.02, // Adjust delay between each child animation
											}
										}
									}}>
										{/* Centered text */}
										<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
		
											<div className="relative z-10 flex flex-col items-center justify-center">
												<motion.h2 className="text-white text-4xl font-bold" variants={cards}>MJGanaden</motion.h2>
												<motion.h3 className="text-white text-xl" variants={cards}>Portfolio site</motion.h3>
												<motion.h4 className="text-white text-sm font-bold" variants={cards}>(React)</motion.h4>
												<motion.a href="" target="_blank" rel="noopener noreferrer" className="m-5 bg-blue w-32 h-10 flex items-center justify-center rounded hover:bg-[#0D66D0] transition-colors duration-300 ease-in-out" variants={cards}>View</motion.a>
											</div>
										</div>
										<div className="absolute inset-0 bg-black opacity-30">
											
										</div>
										<Image src="/MJGanaden.svg" width={1920} height={1080} alt="Picture of the author" className="w-full" />
									</motion.div>
								</motion.div>

								</div>
							</div>
						</section>

						{/* Project Section mobile */}
						<section id="projects-small" className="flex flex-col lg:hidden gap-3 lg:gap-16 items-center w-full py-20">
							<span className="flex items-center justify-center">
								<h2 className="text-3xl lg:text-4xl font-bold">Projects</h2>
							</span>
							<div className="flex flex-col gap-6">
								<div className="flex flex-col">
									<div className="w-full h-[280px] rounded overflow-hidden">
										<Image src="/DDstudios.png" width={426} height={534} alt="Picture of the author" className="h-full w-full object-cover"/>
									</div>
									<div className="flex flex-col -mt-3">
										<span className="text-3xl lg:text-4xl font-bold">DDStudios</span>
										<span className="-mt-2">Knowledge in testing websites to ensure great functionality and user interaction</span>
									</div>
								</div>
								<div className="flex flex-col">
									<div className="w-full h-[280px] rounded overflow-hidden">
										<Image src="/DDstudios.png" width={426} height={534} alt="Picture of the author" className="h-full w-full object-cover"/>
									</div>
									<div className="flex flex-col -mt-3">
										<span className="text-3xl lg:text-4xl font-bold">MJGanaden</span>
										<span className="-mt-2">Knowledge in testing websites to ensure great functionality and user interaction</span>
									</div>
								</div>
							</div>
						</section>


						{/* Awards Secion */}
						<section id="awards" className="flex flex-col  gap-3 lg:gap-16 items-center justify-center">
							<h1 className="text-3xl lg:text-4xl font-bold">Awards</h1>
							<div className="flex flex-col items-center justify-center w-full">
							{
								awards.map( (award, index) => {
								return <Project index={index} title={award.title} date={award.date} src={award.src} href={award.href} setModal={setModal} key={index}/>
								})
							}
							</div>
							<div className="hidden lg:block">
								<Modal modal={modal} projects={awards}/>
							</div>
						</section>

						{/* Certificates Secion */}
						<section id="certificates" className="flex flex-col gap-3 py-20 lg:gap-16 items-center justify-center">
							<h1 className="text-3xl lg:text-4xl font-bold">Certificates</h1>
							<div className="flex flex-col items-center justify-center w-full">
							{
								certificates.map( (certificate, index) => {
								return <Project index={index} title={certificate.title} date={certificate.date} src={certificate.src} href={certificate.href} setModal={setModal2} key={index}/>
								})
							}
							</div>
							<div className="hidden lg:block">
								<Modal modal={modal2} projects={certificates}/>
							</div>
						</section>

					</div>
				</div>
			{/*)}*/}
		</div>
		
	);
}
