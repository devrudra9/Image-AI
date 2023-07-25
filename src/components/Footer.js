import React from 'react'

import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-warraper">
            <div className="container">
                <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} - @devrudra9</p>
                <div className="group-icon">
                    <a href="https://github.com/devrudra9" rel="noreferrer" target="_blank">
                        <img className="github-icon" src={GithubIcon} alt="" />
                    </a> &nbsp; &nbsp;
                    <a href="https://www.linkedin.com/in/rudreshwarbaranwal/" rel="noreferrer" target="_blank">
                        <img className="linkedin-icon" src={LinkedinIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
