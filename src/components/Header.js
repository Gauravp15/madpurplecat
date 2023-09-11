import React, {useState} from "react";
import { ElongatedBtn } from "./ElongatedBtn";

export const Header = () => {

    const [isNavOpen, toggleNavMenu] = useState(false);

    return (
        <header className="header">
            <div className="meow-wrapper" onClick={() => toggleNavMenu(true)}>
                <img src="images/meow.png" alt="Meow menu" />
            </div>
            {isNavOpen && (<nav className="nav-menu">
                <span className="close-nav" onClick={() => toggleNavMenu(false)}>Close</span>
                <div className="nav-menu-wrapper">
                    <ul className="nav-menu-links">
                        <li>
                            <a href="#">Work</a>
                        </li>
                        <li>
                            <a href="#">Clients</a>
                        </li>
                        <br />
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                    </ul>
                    <ElongatedBtn btnText="Download my resume" btnLink="" />
                    <div className="lower-nav-wrapper">
                        <a className="highlight-email" href="mailto:meow@madpurplecat.com">meow@madpurplecat.com</a>
                        <div className="footer-wrapper">
                            <ul className="footer-links">
                                <li className="follow-me">
                                    <p>Follow me on</p>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/madpurplecat/" target="_blank">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/bhoomi.shah.31" target="_blank">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/bhoomi-shah-40242051/" target="_blank">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://www.behance.net/madpurplecat" target="_blank">Behance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>)}
        </header>
    )
}