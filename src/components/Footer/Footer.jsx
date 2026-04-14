import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaLinkedin, FaPaperPlane, FaPinterestP } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className='flex between border-btm p-block-2 gap-4'>
                    <h2>Let's <span className='green-text'>Connect</span> there</h2>
                    <a href="#" className='btn self-end'>Hire Me Now </a>
                </div>

                <div className="p-block-7 flex flex-start gap-4">
                    <div className="footer-wrapper">
                        <a href="#" className='logo'>
                            <span>S</span> Swet.
                        </a>

                        <p className='mt-2'>
                            I am a motivated web designer with hands-on project experience in creating responsive and user-friendly
                            websites, looking forward to working with companies and startups to grow and contribute.
                        </p>

                        <div className='flex gap-1 mt-2'>
                            <a href="#" className='icon-container green-inverse '>
                                <FaFacebookF />
                            </a>
                            <a href="#" className='icon-container green-inverse '>
                                <FaXTwitter />
                            </a>
                            <a href="#" className='icon-container green-inverse '>
                                <FaPinterestP />
                            </a>
                            <a href="#" className='icon-container green-inverse '>
                                <FaInstagram />
                            </a>
                            <a href="#" className='icon-container green-inverse '>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <ul className="footer-wrapper">
                        <li>
                            <h6>Navigation</h6>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>Home</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>Services</a>
                        </li>
                        <li className='mt-2'> 
                            <a href="#" className='link'>About Me</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>Projects</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>Testimonials</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>Contact Me</a>
                        </li>
                    </ul>

                    <ul className="footer-wrapper">
                        <li>
                            <h6>Contact</h6>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>0123-456-789</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>www.example.com</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>example@gmail.com
                            </a>
                        </li>
                        <li className='mt-2'>
                            <a href="#" className='link'>2464 Royal Ln. Mesa,<br />
                                New Jersey 45663</a>
                        </li>
                    </ul>

                    <div className="footer-wrapper">
                        <h6>Get the latest Information</h6>
                        <div className="footer-input mt-2 flex stretch">
                            <input type="email" autoComplete='off' placeholder='Email Here ' className='email-field ' />
                            <button className='input-btn'>
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='copyright '>
                <div className="wrapper flex between">
                    <p>Copyright &copy; Ahmed. All Rights Reserved</p>
                    <p>User Terms & Condition | Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer