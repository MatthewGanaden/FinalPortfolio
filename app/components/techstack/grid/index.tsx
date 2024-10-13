'use client';

import React from 'react'
import { motion, Variants } from "framer-motion"
import Image from "next/image";

const cardVariants: Variants = {
  offscreen: {
    y: 400
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

export default function index() {
  return (
    <div 
        className="grid grid-rows-3 gap-6 items-center mx-72 my-20"
      >
        <motion.div 
          className="grid grid-cols-10 grid-rows-2 gap-6 items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div 
            className="h-full w-full flex items-centerjustify-center col-span-2 row-span-2"
            variants={cardVariants}
          >
            <Image src="/HTML.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </motion.div>
          <motion.div className="h-full w-full flex items-center justify-center col-span-1 row-span-1" variants={cardVariants}>
            <Image src="/CSS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </motion.div>
          <div className="h-full w-full fl ex items-center justify-centercol-span-1 row-span-1">
            <Image src="/JS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <motion.div 
            className="h-full w-full flex items-center justify-center col-span-2 row-span-2"
            variants={cardVariants}
          >
            <Image src="/Tailwind.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </motion.div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/React.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/PS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <motion.div 
            className="h-full w-full flex items-center justify-center col-span-2 row-span-2"
            variants={cardVariants}
          >
            <Image src="/Figma.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </motion.div>
          <div className="h-full w-full flex items-center justify-center col-span-2 row-span-1">
            <Image src="/Vue.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/AE.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/PR.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
        </motion.div>
        
        <div className="bg-gray h-full z-10 flex rounded items-center justify-center">
          <Image src="/Techstack.svg" width={250} height={250} alt="Picture of the author" className="w-full"/>
        </div>

        <div className="grid grid-cols-10 grid-rows-2 gap-6 items-center">
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/NodeJS.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-2 row-span-2">
            <Image src="/Java.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-2 row-span-2">
            <Image src="/Python.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/C.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-2 row-span-2">
            <Image src="/Selenium.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/Git.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/Wordpress.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/PHP.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/C++.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/Firebase.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-1 row-span-1">
            <Image src="/Arduino.svg" width={1000} height={1000} alt="Picture of the author" className="w-full"/>
          </div>
        </div>
      </div>
  )
}
