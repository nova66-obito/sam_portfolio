import React, { useEffect, useState } from 'react';
import './about.css';
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import Pic from '../../assets/pro5.png';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
export default function About() {
    const count = [1, 2, 3];
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
      const phonenum = "+919361998327";
    const whatsapp = `https://wa.me/${phonenum}`;
    return (
        <>
            <div id='about' className="about center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="a-pic center">
                    <img src={Pic} alt="About" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="a-txt col-center">
                    {/* about */}
                    <div className="a-t-top center">
                        <h1 ref={ref} className={`title ${inView ? 'inview' : null}`}>about me</h1>
                    </div>
                    {/* about box */}
                    <div className="a-t-bot">
                        {/*about image*/}
                        <div className="dot center">
                            {count.map((item) => { return <p></p> })}
                        </div>
                        {/* text and details */}
                        <div className="a-t-cover">
                            <h2 className='sup'>👋 Hello! I’m Sambath,</h2>
                            <p>a passionate Full Stack Web Developer with a love for crafting fast, dynamic, and visually appealing digital experiences. I thrive on turning complex ideas into clean, functional, and user-friendly websites and applications.</p>
                            <div className="a-icon">
                                <h3>Contact Me</h3>
                                <div className="a-i-cover">
                                    <a href="https://github.com/nova66-obito" target='_blank'><FaGithub className='a-i-icon' /></a>
                                    <a href="mailto:sambathvj0506@gamil.com" target='_blank'><IoMail className='a-i-icon' /></a>
                                    <a href={whatsapp} target='_blank'><FaWhatsapp className='a-i-icon' /></a>
                                    <a href="#" target='_blank'> <FaLinkedinIn className='a-i-icon' /></a>
                                    <a href="https://app.netlify.com/teams/nova66-obito/projects" target='_blank'><SiNetlify className='a-i-icon'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}