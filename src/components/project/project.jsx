import React, { useState } from "react";
import './project.css';
import { FaLink } from "react-icons/fa6";
import Pic1 from '../../assets/pr1.png';
import Pic2 from '../../assets/pr2.jpg';
import Pic3 from '../../assets/pr3.jpeg';
import Pic4 from '../../assets/pr4.jpeg';
import Pic5 from '../../assets/pr5.jpeg';
import Pic6 from '../../assets/pr6.jpg';
import Pic7 from '../../assets/pr7.jpg';
import Pic8 from '../../assets/pr8.jpg';
import Pic9 from '../../assets/bg.jpg';
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';
export default function Project() {
    const pro = [
        { name: 'code99 webSite', pic: Pic1, link: 'https://code99-it-training.netlify.app/', },
        { name: 'Akatsuki', pic: Pic2, link: 'https://nagato.netlify.app/', },
        { name: 'weather app', pic: Pic3, link: 'https://weather-check06.netlify.app/' },
        { name: 'zyra', pic: Pic4, link: 'https://newshoping.netlify.app/' },
        { name: 'Calculator', pic: Pic5, link: 'https://reactadd.netlify.app/' },
        { name: 'Bike center', pic: Pic7, link: 'https://nova66-obito.github.io/bike-service-center/' },
        { name: 'Code99 landing page', pic: Pic1, link: 'https://code99it.netlify.app/' },
        { name: 'Green land', pic: Pic6, link: 'https://nova66-obito.github.io/farmer-site/' },
        { name: 'Login page', pic: Pic8, link: 'https://user-value.netlify.app/' },
        { name: 'Image search', pic: Pic9, link: 'https://image-search06.netlify.app/' },
    ];
    const [show, setShow] = useState(0);
    const clik = (i) => {
        setShow(show === i ? null : i);
    }
    const [proref, proinView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
    return (
        <>
            <div id="project" className="project col-center">
                <h1 ref={proref} className={`title ${proinView ? 'inview' : ''}`}>Project</h1>
                <div className="project-content center">
                    {pro.map((item, i) => {
                        return (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0, transition: 0.4 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className={`project-item`} key={i} onClick={() => clik(i)}>
                                    <div className={`pro-pic project-box  ${show === i ? 'see' : null}`}>
                                        <img src={item.pic} alt={item.name}
                                            width={100}
                                            height={100}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className={`pro-txt project-box col-center ${show === i ? 'see' : null}`}>
                                        <h4>{item.name}</h4>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer"><span><FaLink /></span> Live Demo</a>
                                    </div>
                                </motion.div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}