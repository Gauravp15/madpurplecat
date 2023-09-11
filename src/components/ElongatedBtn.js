import React from "react";

export const ElongatedBtn = ({btnText, btnLink}) => {
    return (
        <div className="common-link-btn">
            <a href={btnLink} target="_blank" className="common-link-text">
                <span className="btn-text">{btnText}</span>
                <span className="btn-arrow"><img src="../images/arrow.png" alt="Arrow" /></span>
            </a>
        </div>
    )
}