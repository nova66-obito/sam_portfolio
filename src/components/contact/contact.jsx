import React, { useState } from "react";
import './contact.css';
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaLongArrowAltRight } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaLocationArrow } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiNetlify } from "react-icons/si";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const phonenum = "+919361998327";
    const whatsapp = `https://wa.me/${phonenum}`;

    // EmailJS configuration - REPLACE WITH YOUR ACTUAL VALUES
    const EMAILJS_SERVICE_ID = 'service_poecukg';
    const EMAILJS_TEMPLATE_ID = 'template_mcqrkxk';
    const EMAILJS_PUBLIC_KEY = 'K7wk6vztSDrtxvOLI';

    // form data
    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email validation regex
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Input validation
    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "name":
                if (!value.trim()) {
                    error = "Name is required";
                } else if (value.trim().length < 2) {
                    error = "Name must be at least 2 characters";
                }
                break;
            case "email":
                if (!value.trim()) {
                    error = "Email is required";
                } else if (!validateEmail(value)) {
                    error = "Please enter a valid email address";
                }
                break;
            case "message":
                if (!value.trim()) {
                    error = "Message is required";
                } else if (value.trim().length < 10) {
                    error = "Message must be at least 10 characters";
                }
                break;
            default:
                break;
        }

        return error;
    };

    // Handle input changes with validation
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));

        // Validate on change only if there's already an error
        if (errors[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    // Handle blur (when user leaves a field)
    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Form submission with EmailJS
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validate all fields
        let isValid = true;
        const newErrors = {};

        Object.keys(user).forEach(key => {
            const error = validateField(key, user[key]);
            newErrors[key] = error;
            if (error) isValid = false;
        });

        setErrors(newErrors);

        if (!isValid) {
            toast.error('Please fix the errors in the form', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: user.name,
                    from_email: user.email,
                    message: user.message,
                    to_email: 'sambathvj0506@gmail.com',
                    reply_to: user.email
                },
                EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result.text);
            
            toast.success('Message sent successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });

            // Reset form after successful submission
            setUser({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            console.error('Error sending email:', error);
            
            toast.error('Failed to send message. Please try again or contact me directly.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const [conref, coninView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    return (
        <div id="contact" className="contact center">
            {/* text */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } }}
                viewport={{ once: true, amount: 0.3 }}
                className="c-get ">
                <h1 ref={conref} className={`title ${coninView ? 'inview' : ''}`}>get in touch</h1>
                <div className="c-add col-center">
                    <div className="c-a-txt">
                        <a href="https://www.google.com/maps/place/Velachery,+Chennai,+Tamil+Nadu/@12.9791139,80.2197719,14z/data=!3m1!4b1!4m6!3m5!1s0x3a525d9ff2065a3b:0x66435015604038cc!8m2!3d12.9754605!4d80.2207047!16zL20vMDc4Ynp6?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><span><FaLocationArrow className="c-icons"/></span> velachery,chennai-600042</a>
                        <a href="mailto:sambathvj0506@gamil.com" target="_blank" rel="noopener noreferrer"><span><SiGmail className="c-icons"/></span> sambathvj0506@gamil.com</a>
                        <a href="tel:+919361998327" target="_blank" rel="noopener noreferrer"><span><BiSolidPhoneCall className="c-icons"/></span> +91-93619-98327</a>
                    </div>
                    {/* icon */}
                    <div className="a-icon c-icon">
                        <h3>Contact Me</h3>
                        <div className="a-i-cover">
                            <a href="https://github.com/nova66-obito" target="_blank" rel="noopener noreferrer"><FaGithub className='a-i-icon' /></a>
                            <a href="mailto:sambathvj0506@gamil.com" target="_blank" rel="noopener noreferrer"><IoMail className='a-i-icon' /></a>
                            <a href={whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp className='a-i-icon' /></a>
                            <a href="#"><FaLinkedinIn className='a-i-icon' /></a>
                            <a href="https://app.netlify.com/teams/nova66-obito/projects" target="_blank"><SiNetlify className='a-i-icon' /></a>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } }}
                viewport={{ once: true, amount: 0.3 }}
                className="c-form">
                    <form onSubmit={handleSubmit}>
                        <div className="put">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name here*"
                                value={user.name}
                                onChange={handleInput}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                            />
                            {errors.name && <small className="error-message">{errors.name}</small>}
                        </div>
                        <div className="put">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email here*"
                                value={user.email}
                                onChange={handleInput}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                            />
                            {errors.email && <small className="error-message">{errors.email}</small>}
                        </div>
                        <div className="put">
                            <textarea
                                name="message"
                                id="msg"
                                placeholder="Message here*"
                                rows={5}
                                value={user.message}
                                onChange={handleInput}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                            ></textarea>
                            {errors.message && <small className="error-message">{errors.message}</small>}
                        </div>
                        <button 
                            type="submit" 
                            className="center"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            <p className="arrow-icon">
                                <FaLongArrowAltRight className="arrow-real" />
                            </p>
                        </button>
                    </form>
            </motion.div>
        </div>
    )
}