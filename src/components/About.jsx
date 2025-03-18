import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn , textVariant } from "../utils/motion";
import { SectionWrapper } from "../Higher_Order_Component";


const ServiceCard = ({index , title , icon})=>{
  return(
   
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right" , "spring" , index*0.5 , 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

        <div 
        options={{
          max:45,
          scale:1,
          speed: 450,
        }}
        className="flex justify-evenly items-center flex-col bg-tertiary rounded-[20px] px-12 py-5 min-h-[280px]"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-center font-bold text-white text-[20px]">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
};


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("" , "" , 0.1 , 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
    Welcome to my digital space, where creativity meets functionality. As a passionate web developer skilled in HTML, CSS, JavaScript, React, Firebase Authentication and Email JS. I create visually stunning, responsive websites that deliver exceptional performance. I am now learning <span className="font-semibold text-white">Three JS</span> and <span className="font-semibold text-white">Backend Technologies</span>. My focus is on turning complex challenges into elegant solutions, always staying ahead with the latest technologies.

Let’s collaborate to bring your ideas to life and make your digital presence extraordinary. Together, we can build something that not only meets your needs but also leaves a lasting impression. Your vision, combined with my skills, can make your brand unforgettable. Let’s shape the future of the web, one line of code at a time.
</motion.p>

<div className="mt-20 flex flex-wrap gap-10">

  {services.map((service , index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}

</div>


</>
  )
}

export default SectionWrapper (About , "about");