import React from 'react';

const CustomLogo = ({ fillColor = "#64ffda", width = "50px", height = "50px" }) => {
    return (
        <svg
            style={{ cursor: 'pointer' }}
            width={width}
            height={height}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background Polygon */}
            <polygon
                fill="#0a192f"
                points="50,0 0,25 0,75 50,100 100,75 100,25"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={fillColor}
                strokeWidth="5"
            />
            {/* Smaller Letter E in the center */}
            <path
                d="M35 30 H65 V35 H45 V50 H65 V55 H45 V70 H65 V75 H35 V30 Z"
                fill={fillColor}
            />
        </svg>
    );
};

export default CustomLogo;
