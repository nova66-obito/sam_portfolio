import React from "react";
import './footer.css'
import { MdArrowBackIosNew } from "react-icons/md";
import Pro from '../../assets/sam.png'
import { motion } from "motion/react";
export default function Footer() {
    return (
        <>
            <motion.footer
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } }}
                viewport={{ once: true, amount: 0.3 }}
                className="center foot" >
                <a href=""><img src={Pro} alt="sam" /></a>
                <a href="#"> <div className="upper"><MdArrowBackIosNew className="f-ar" /></div></a>
                <div className="copy center">
                    <p>@copyright By SAM</p>
                </div>
            </motion.footer>
        </>
    )
}