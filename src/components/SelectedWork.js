import React from "react";
import { workDetails } from "../content/work";
import { ContentContainer } from "./ContentContainer";
import { ElongatedBtn } from "./ElongatedBtn";
import { Ticker } from "./Ticker";

export const SelectedWork = () => {

    return (
        <section className="selected-work-wrapper" id="work">
            <ContentContainer>
            {
                workDetails.map((item, idx) => {
                    return(
                        <div className="selected-work-block" key={idx}>
                            <div className="selected-work-block-left">
                                <span className="work-categories">{item.categories} - <span className="highlight-category">{item.highlightCategory}</span></span>
                                <h3 className="selected-work-title">{item.title}</h3>
                                <p className="selected-work-description">{item.description}</p>
                                <div className="work-link">
                                    <a href={item.link}>{item.linkText}</a>
                                </div>
                            </div>
                            <div className="selected-work-block-right">
                                <img src={item.imgLink} alt={item.title} />
                            </div>
                        </div>
                    )
                })
            }
            <ElongatedBtn btnText="see all projects" btnLink="" />
            </ContentContainer>
            <div className="client-wrapper" id="clients">
                <div className="client-banner">
                    <img src="images/client-banner.png" alt="Client banner" />
                </div>
                <Ticker type="client">
                    <ul className="ticker-list clients-list">
                        <li>
                            <img src="images/client-logos/purpose.svg" alt="Purpose"/>
                        </li>
                        <li>
                            <img src="images/client-logos/breakthrough.svg" alt="Breakthrough"/>
                        </li>
                        <li>
                            <img src="images/client-logos/ellementry.svg" alt="Ellementry"/>
                        </li>
                        <li>
                            <img src="images/client-logos/fairtrade.svg" alt="Fairtrade India"/>
                        </li>
                        {/* <li>
                            <img src="images/client-logos/purpose.png" alt="Purpose"/>
                        </li> */}
                        <li>
                            <img src="images/client-logos/rohini-nilekani.svg" alt="Rohini Nilekani"/>
                        </li>
                        <li>
                            <img src="images/client-logos/bluestone.svg" alt="Bluestone"/>
                        </li>
                        <li>
                            <img src="images/client-logos/cream-bell.svg" alt="Cream Bell"/>
                        </li>
                        <li>
                            <img src="images/client-logos/jyothy-labs.svg" alt="Jyothy"/>
                        </li>
                        <li>
                            <img src="images/client-logos/marico.svg" alt="Marico"/>
                        </li>
                        <li>
                            <img src="images/client-logos/mtv.svg" alt="MTV"/>
                        </li>
                    </ul>
                </Ticker>
            </div>
        </section>
    )
}