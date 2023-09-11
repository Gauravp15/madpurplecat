import React from "react";
import { ContentContainer } from "./ContentContainer";
import { ElongatedBtn } from "./ElongatedBtn";
import { Ticker } from "./Ticker";

export const JourneyCuriosity = () => {
    return (
        <section className="journey-curiosity">
            <ContentContainer>
                <h2 className="journey-title"><span className="journey-title-text">A journey of curiosity and explorations</span></h2>
                <div className="journey-content-wrapper">
                    <div className="journey-content-left">
                        <div className="journey-image">
                            <img src="../images/bhoomishah.jpg" alt="Bhoomi Shah" />
                        </div>
                    </div>
                    <div className="journey-content-right">
                        <p className="journey-content">An investigative thinker and a determined dreamer with a keen interest in crafting digital experiences through thoughtful strategy and execution.</p>
                        <p className="journey-content">I have years of experience working and collaborating with some great minds and good brands where I got my hands on e-com design, social media and all things digital.
                        </p>
                        <p className="journey-content">Working along the way somewhere I realised I wanted to design for humanity and do some greater good. I believed that as big a problem as climate crises, gender awareness, pandemics, world hunger etc can all be solved at an intersection of technology and design. It's not just about answering the right problem but asking the right questions.
                        </p>
                        <p className="journey-content">Fluid in thought and creativity with a strong and pungent personality. when I am not working, I am probably cooking, crafting and hooping.</p>
                    </div>
                </div>
                {/* <h2 className="journey-title">My mojo and my skillsets</h2> */}
                <div className="skillset-wrapper">
                    <div className="skillset-block">
                        <div className="skillset-img">
                            <img src="images/skillset1.png" alt="Experience & Interface Design" />
                        </div>
                        <div className="skillset-content">
                            <h3 className="skillset-title">Values</h3>
                            <p className="skillset-description">Altruism + Empathy + Giving + Play-fullness + Collaboration + Courage + Freedom</p>
                        </div>
                    </div>
                    <div className="skillset-block">
                        <div className="skillset-img">
                            <img src="images/skillset2.png" alt="Brand Management" />
                        </div>
                        <div className="skillset-content">
                            <h3 className="skillset-title">Skillsets</h3>
                            <p className="skillset-description">Strategic thinking + Storytelling + Visual Design + Interaction design + Information architecture + Wire-framing + Research</p>
                        </div>
                    </div>
                    <div className="skillset-block">
                        <div className="skillset-img">
                            <img src="images/skillset3.png" alt="Art Direction" />
                        </div>
                        <div className="skillset-content">
                            <h3 className="skillset-title">Passion</h3>
                            <p className="skillset-description">Social Impact + Behavioural science + Organic Farming + Craft therapy + Cooking + Home decor</p>
                        </div>
                    </div>
                </div>
                <ElongatedBtn btnText="download my resume" btnLink="" />
            </ContentContainer>
            <Ticker>
                <ul className="ticker-list">
                    <li>
                        <p>My Philosophy</p>
                    </li>
                    <li>
                        <img src="images/cat.gif" alt="Cat" width={60}/>
                    </li>
                    <li>
                        <p>My Philosophy</p>
                    </li>
                    <li>
                        <img src="images/cat.gif" alt="Cat" width={60}/>
                    </li>
                    <li>
                        <p>My Philosophy</p>
                    </li>
                    <li>
                        <img src="images/cat.gif" alt="Cat" width={60}/>
                    </li>
                    <li>
                        <p>My Philosophy</p>
                    </li>
                    <li>
                        <img src="images/cat.gif" alt="Cat" width={60}/>
                    </li>
                </ul>
            </Ticker>
        </section>
    )
}