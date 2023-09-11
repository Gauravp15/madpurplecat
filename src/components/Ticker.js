import React from "react";
import Marquee from "react-fast-marquee"

export const Ticker = ({children, type}) => {
    return(
        <section className={`ticker-component ${type === "client" ? "client-ticker" : ""}`}>
            <Marquee>
                {children}
            </Marquee>
        </section>
    )
}