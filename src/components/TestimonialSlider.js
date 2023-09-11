import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

export const TestimonialSlider = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoPlay: true
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
                    Bhoomi Shah is talented, hardworking, sincere and punctual. It is difficult to  decide which of these are the best part about working with her. Because she also has another tool up her arsenal - she requires no follow-ups. She is prompter than you'd imagine, faster than you want, sharper than most in her bracket in the market.
                    </p>
                    <p className="testimonial-person">- Omkar sane, fOUNDER AT Story surf & SANE Difference</p>
                </div>
                <div className="testimonial-block">
                    <p className="testimonial-content">
                    Bhoomi Shah is talented, hardworking, sincere and punctual. It is difficult to  decide which of these are the best part about working with her. Because she also has another tool up her arsenal - she requires no follow-ups. She is prompter than you'd imagine, faster than you want, sharper than most in her bracket in the market.
                    </p>
                    <p className="testimonial-person">- Omkar sane, fOUNDER AT Story surf & SANE Difference</p>
                </div>
                <div className="testimonial-block">
                    <p className="testimonial-content">
                    Bhoomi Shah is talented, hardworking, sincere and punctual. It is difficult to  decide which of these are the best part about working with her. Because she also has another tool up her arsenal - she requires no follow-ups. She is prompter than you'd imagine, faster than you want, sharper than most in her bracket in the market.
                    </p>
                    <p className="testimonial-person">- Omkar sane, fOUNDER AT Story surf & SANE Difference</p>
                </div>
            </Slider>
        </div>
    )
}