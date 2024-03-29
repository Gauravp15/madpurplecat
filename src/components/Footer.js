import React from "react";
import { ContentContainer } from "./ContentContainer";

export const Footer = () => {
    return (
        <section className="footer">
            <ContentContainer>
                <div className="footer-wrapper">
                    <p className="mob-name mob-follow-me">Follow me on</p>
                    <ul className="footer-links">
                        <li className="follow-me desk-name">
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
                <p className="bottom-line">&copy;{new Date().getFullYear()} MadPurpleCat. All rights reserved.</p>
            </ContentContainer>
        </section>
    )
}