import React from "react";
import { ContentContainer } from "./ContentContainer";

export const Masthead = () => {
    return (
        <section className="masthead">
            <ContentContainer>
                <h1 className="main-title">MAD PURPLE CAT</h1>
                <div className="masthead-wrapper">
                    <div className="masthead-inner">
                        <p className="masthead-content">Hi, I am Bhoomi Shah</p>
                        <div className="masthead-content-wrapper">
                            <p className="masthead-content">I craft digital experiences and design killer interfaces</p>
                            <ul className="masthead-list">
                                <li>
                                    <p className="masthead-small-content">UX designer BASED OUT OF MUMBAI, India</p>
                                </li>
                                <li>
                                    <p className="masthead-small-content">Passionate about social impact and behavioural science</p>
                                </li>
                                <li>
                                    <p className="masthead-small-content">Hustler. Not an influencer. Soon to be an avenger.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    )
}