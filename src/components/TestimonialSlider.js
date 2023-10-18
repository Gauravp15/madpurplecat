import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

export const TestimonialSlider = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
        ]
    }

    return (
        <div className="testimonial-slider">
            <Slider {...sliderSettings}>
                <div className="testimonial-block">
                    <p className="testimonial-content">
                    Bhoomi Shah is talented, hardworking, sincere and punctual. It is difficult to  decide which of these are the best part about working with her. Because she also has another tool up her arsenal - she requires no follow-ups. She is prompter than you'd imagine, faster than you want, sharper than most in her bracket in the market.
                    </p>
                    <p className="testimonial-person">- Omkar sane, fOUNDER AT Story surf & SANE Difference</p>
                </div>
                <div className="testimonial-block">
                    <p className="testimonial-content">
                    Bhoomi is an extremely organized and self-motivated individual and has a very creative outlook on things around her. She can perform well within deadlines even under pressure and has the skills to lead a team skillfully. She possesses design thinking abilities and can critically analyze what would work with an audience. She has the capability to work out solutions by going beyond the call of duty if required. She delivers everything between research, ideation to execution.
                    </p>
                    <p className="testimonial-person">- Riddhima, Design Head, Ellementry</p>
                </div>
                <div className="testimonial-block">
                    <p className="testimonial-content">
                    Bhoomi's like this heady mix where a detail-oriented OCD meets a visionary. She's got this superpower to grab the pulse and cut through complex challenges with ease. All this backed with a gladiator like grit makes her an asset for any team.
                    </p>
                    <p className="testimonial-person">- Alok Banerjee, CREATIVE DIRECTOR AT XQ VIDEO LABS</p>
                </div>
                <div className="testimonial-block">
                    <p className="testimonial-content">
                    Bhoomi brings in a sound understanding of design, as well as the agility and the logical mindset of a UI/UX designer. She is organised and time bound and creates work flows that can be followed by her colleagues with ease and ensure timely completion of projects. As a consultant, she has been a dedicated team player who values a collaborative approach and at the same time takes a lead wherever required. Bhoomi is committed to delivering the best possible results even in difficult conditions.
                    </p>
                    <p className="testimonial-person">- Nirmala Nair, Founder, Kaboom Social Impact</p>
                </div>
            </Slider>
        </div>
    )
}