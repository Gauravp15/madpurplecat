import React from "react";
import { ContentContainer } from "./ContentContainer";
import { Ticker } from "./Ticker";

export const Masthead = () => {
    return (
        <section className="masthead">
            <ContentContainer>
                {/* <h1 className="main-title">MAD PURPLE CAT</h1> */}
                <img src="images/mpc_logo.svg" alt="Mad Purple Cat" className="highlight-title" />
                <div className="masthead-wrapper">
                    <div className="masthead-inner">
                        <p className="masthead-content desk-name">Hi, I am Bhoomi Shah</p>
                        <div className="masthead-content-wrapper">
                            <div className="masthead-gif-wrapper">
                                <div className="masthead-gif">
                                    <div className="masthead-gif-overlay"></div>
                                    <img src="images/masthead2.gif" alt="Digital Experience" />
                                </div>
                                <div className="masthead-content masthead-text-wrapper">
                                    <div className="main-cat-gif">
                                        <img src="images/main.gif" alt="Main cat" />
                                    </div>
                                    <p className="masthead-content mob-name">Hi, I am Bhoomi Shah</p>
                                    <span className="masthead-text shift-right">I craft digital</span>
                                    <span className="masthead-text">experiences and</span>
                                    <span className="masthead-text shift-right">design killer</span> 
                                    <span className="masthead-text">interfaces</span>
                                    <ul className="masthead-list">
                                        <li>
                                            <p className="masthead-small-content">UX designer from MUMBAI, <br /> India <span><img src="images/indiaflag.svg" alt="India Flag" /></span></p>
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
                    </div>
                </div>
            </ContentContainer>
            <Ticker>
                <ul className="ticker-list">
                    <li>
                        <p>selected work</p>
                    </li>
                    <li>
                        <img src="images/eyes-emoji.svg" alt="Eyes emoji"/>
                    </li>
                    <li>
                        <p>selected work</p>
                    </li>
                    <li>
                        <img src="images/eyes-emoji.svg" alt="Eyes emoji"/>
                    </li>
                    <li>
                        <p>selected work</p>
                    </li>
                    <li>
                        <img src="images/eyes-emoji.svg" alt="Eyes emoji"/>
                    </li>
                    <li>
                        <p>selected work</p>
                    </li>
                    <li>
                        <img src="images/eyes-emoji.svg" alt="Eyes emoji"/>
                    </li>
                </ul>
            </Ticker>
        </section>
    )
}