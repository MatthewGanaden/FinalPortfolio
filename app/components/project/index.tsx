'use client';
import React from 'react'
import styles from './style.module.css';
import Image from "next/image";

export default function index({index, title, date, href, src, setModal}) {

    return (
        
        <a href={href} 
        target="_blank" 
        onMouseEnter={() => { setModal({ active: true, index }) }} 
        onMouseLeave={() => { setModal({ active: false, index }) }} 
        className="project group flex flex-col lg:flex-row w-full justify-between lg:items-center lg:px-6 my-3 lg:my-0 lg:py-[50px] 
                   border-t border-dashed cursor-pointer transition-all duration-200 hover:opacity-50 
                   border-b lg:border-b-0 lg:last:border-b">
         <Image 
           src={`/${src}`}
           width={500}
           height={0}
           alt="image"
           className="lg:hidden w-full"
         />
                             
         <h2 className="text-sm font-bold lg:text-xl m-0 lg:font-normal transition-all duration-[300ms] transform lg:group-hover:-translate-x-2 lg:w-1/2">
           {title}
         </h2>
         <p className="text-sm lg:text-xl transition-all duration-[300ms] transform lg:group-hover:translate-x-2 pb-3 lg:pb-0">
           {date}
         </p>
     </a>
     
        
    )
}
