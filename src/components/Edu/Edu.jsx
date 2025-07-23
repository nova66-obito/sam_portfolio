import React from "react";
import './Edu.css';
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import Skill1 from '../../assets/skill8.png';
import Skill2 from '../../assets/skill6.png';
import Skill3 from '../../assets/skill7.png';
import Skill4 from '../../assets/skill5.png';
import Skill5 from '../../assets/skill2.svg';
import Skill6 from '../../assets/skill10.png';
import Skill7 from '../../assets/skill11.png';
import Skill8 from '../../assets/skill3.png';
import Skill9 from '../../assets/skill9.png';
import Skill10 from '../../assets/skill1.svg';
import Edus1 from '../../assets/edu1.png';
import Edus2 from '../../assets/edu2.png';
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';
export default function Edu() {
    const skillDetails = [
        { pic: Skill1, name: 'html' },
        { pic: Skill2, name: 'css' },
        { pic: Skill3, name: 'javascript' },
        { pic: Skill4, name: 'Bootstrap' },
        { pic: Skill5, name: 'React' },
        { pic: Skill6, name: 'Node' },
        { pic: Skill7, name: 'Mongo' },
        { pic: Skill8, name: 'git' },
        { pic: Skill9, name: 'netlify' },
        { pic: Skill10, name: 'postman' },
    ]
    const educationData = [
        {
            degree: "BCA Computer Application",
            institution: "University of Madras",
            year: "2021 - 2024",
            details: "GPA: 8.9/10.0",
            epic: Edus1,
        },
        {
            degree: "Full Stack WebDevelpoment",
            institution: "Code99 It Acadamey",
            year: "2024 - 2025",
            details: "Hands-on projects",
            epic: Edus2,
        }
    ];
    const count = [1,2,3];
    const [skillref, skillinView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
    const [eduref, eduinView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
    return (
        <>
            <div id="skill" className="skill col-center">
                <h1 ref={skillref} className={`title ${skillinView ? 'inview' : null}`}>skill</h1>
                {/* skill box */}
                <div className="s-b-cover center">
                    {skillDetails.map((skill, i) => {
                        return (
                            <>
                                <motion.div
                                 initial={{ opacity: 0, scale:0 }}
                                        whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.3 } }}
                                        viewport={{ once: true, amount: 0.3 }}
                                className="s-box col-center" key={i}>
                                    <div className="s-pic center">
                                        <img src={skill.pic} alt={skill.name}
                                        width={100}
                                        height={100} 
                                        loading="lazy"
                                        />
                                    </div>
                                    <h2 className="sup">{skill.name}</h2>
                                </motion.div>
                            </>
                        )
                    })}
                </div>
                {/* degree clg */}
                <div className="degree col-center">
                    <h2 ref={eduref} className={`title ${eduinView ? 'inview' : null}`}>Education</h2>
                    <p className="line-f line-com"></p><p className="line-o line-com"></p>
                    <div className="edu-list center">
                        {educationData.map((edu, index) => (
                            <>
                                <motion.div
                                 initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } }}
                                        viewport={{ once: true, amount: 0.3 }}
                                key={index} className="edu-item col-center">
                                    <div className="e-top center">
                                        {count.map((item,i)=>{
                                            return <p></p>
                                        })}
                                    </div>
                                    <div className="e-bot center">
                                        <div className="e-line col-center">
                                            <img src={edu.epic} alt="education" />
                                            <p></p>
                                        </div>
                                        <div className="s-txt col-center">
                                            <h3>{edu.degree}</h3>
                                            <p><strong>{edu.institution}</strong> | {edu.year}</p>
                                            <p>{edu.details}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}