import React, { useEffect, useState } from "react";
import '../css/main.css';
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SamPDF from '../assets/sam.pdf';
import { ToastContainer } from 'react-toastify';
import { TypeAnimation } from "react-type-animation";
import { TbMathGreater } from "react-icons/tb";
import { LuMessageCircleQuestion } from "react-icons/lu";
import Edu from "../components/Edu/Edu";
import About from "../components/about/about";
import Project from "../components/project/project";
import Nav from "../components/Navbar/nav";
import Contact from "../components/contact/contact";
import Footer from "../components/Footer/footer";
export default function Main() {
    const val = ['web-Developer...!', 'front-end-developer...! ', 'full-stack-developer...!'];
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => {
                const newcount = prev + 1;
                return newcount > 2 ? 0 : newcount;
            });
        }, 3000);
        return () => clearInterval(timer);
    }, [count])
    // pdf download
    const Pdf = () => {
        try {
            saveAs(SamPDF, 'SAMBATHKUMAR.S.pdf');
            toast.success('downloaded successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"dark",
            });
        } catch (error) {
            toast.error('Failed to download CV.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"dark",
            });
        }
    };
    return (
        <>
            <main>
                <Nav />
                <section className="overall">
                     <ToastContainer />
                    <div id="home" className="home full padall center">
                        {/* ------details---- */}
                        <div className="h-name col-center">
                            <h1><span>i'M</span> <span>SAMBATHKUMAR</span> <span>s</span></h1>
                            <TypeAnimation
                                key={count}
                                sequence={[
                                    val[count % val.length],
                                    3000,
                                ]}
                                speed={40}
                                repeat={Infinity}
                                className="type"
                            />
                            <button onClick={Pdf} className="s-btn">Download CV</button>
                        </div>
                        {/* ----link about----- */}
                        <a href="#about" className="a-link"> <span className="g-cover"><TbMathGreater className="great" /></span> about us <span><LuMessageCircleQuestion /></span></a>
                    </div>
                    {/* about */}
                    <About />
                    {/* Edu */}
                    <Edu/>
                    {/* project */}
                    <Project/>
                    {/* contact */}
                    <Contact/>
                    {/* footer */}
                    <Footer/>
                </section>
            </main>
        </>
    )
}