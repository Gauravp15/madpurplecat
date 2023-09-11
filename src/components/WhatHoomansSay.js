import React from "react";
import { ContentContainer } from "./ContentContainer";
/* import { TestimonialSlider } from "./TestimonialSlider"; */

export const WhatHoomansSay = () => {
    return (
        <section className="hoomans-say">
            <ContentContainer>
                <div className="hoomans-pointers">
                    <ul>
                        <li>
                            <p>① start with people</p>
                        </li>
                        <li>
                            <p>② listen to your heart</p>
                        </li>
                        <li>
                            <p>③ Alone we can do so little, together we can do so much</p>
                        </li>
                        <li>
                            <p>④ No labels or limits</p>
                        </li>
                        <li>
                            <p>⑤ Jazz through complexity</p>
                        </li>
                        <li>
                            <p>⑥ Trust the process</p>
                        </li>
                    </ul>
                </div>
                <div className="hoomans-testimonial-slider">
                    {/* <h2 className="journey-title"><span>What my hoomans</span><br /><span className="journey-title-text">say about me</span></h2>
                    <TestimonialSlider /> */}
                    <p className="hoomans-bottom-text">now that you know me, it’s time to start making something amazing together. write to me!</p>
                    <a className="highlight-email" href="mailto:meow@madpurplecat.com">meow@madpurplecat.com</a>
                </div>
            </ContentContainer>
        </section>
    )
}