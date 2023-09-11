import React from "react";
import { ContentContainer } from "./ContentContainer";

export const Footer = () => {
    return (
        <section className="footer">
            <ContentContainer>
                <div className="footer-wrapper">
                    <ul className="footer-links">
                        <li className="follow-me">
                            <p>Follow me on</p>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/madpurplecat/" target="_blank">Instagram</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Behance</a>
                        </li>
                    </ul>
                </div>
            </ContentContainer>
        </section>
    )
}