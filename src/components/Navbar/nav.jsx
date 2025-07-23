import React, { useState } from "react";
import './nav.css';
import Logo from '../../assets/sam.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
export default function Nav() {
    const link = [
        {name: 'Home', link: 'home'},
        {name: 'About', link: 'about'},
        {name: 'skill', link: 'skill'},
        {name: 'project', link: 'project'},
        {name: 'contact', link: 'contact'},

    ];
    const [view, setView] = useState(false)
    const click = () => {
        setView(!view)
    }
    const [show2, setShow2] = useState(0)
    let clck = (n) => {
        setShow2(n);
        setView(!view)
    }

    return (
        <>
            <header>
                <nav className="center nav-main full">
                    <div className="logo">
                       <a href=""> <img src={Logo} alt="sam" /></a>
                    </div>
                    <div className="n-link center">
                        <div className={`lk-cover center ${view ? 'act' : null}`}>
                            {link.map((item, i) => {
                                return (
                                    <>
                                        <a key={i} href={`#${item.link}`} className="min-cover center" onClick={() => clck(i)}>
                                        <div className={`min-link col-center ${show2 === i ? 'show' : null}` } key={i+1}>
                                            <a href={`#${item.link}`}>{item.name}</a>
                                            <a href={`#${item.link}`}>{item.name}</a>
                                        </div>
                                        </a>
                                    </>
                                )
                            })}
                        </div>
                        <div className="lk-bar">
                            <div className="bar" onClick={click}>
                               {view ? <IoMdClose className="bar-i"/> : <FaBarsStaggered className="bar-i"/> }
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}