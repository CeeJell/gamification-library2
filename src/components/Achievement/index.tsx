import React from 'react';
import { Props } from './types';
import ProgressBar from '../ProgressBar';

const Achievement: React.FC<Props> = 
({ title, description, picture, percentage, children, borderStyle, pictureStyle, titleStyle, descriptionStyle, progressbarStyle, progressbarSliderStyle, progressbarTextStyle }) => {
    
    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "red", borderRadius: "8px",
            width: "465px", height: "180px", padding: "5px", margin: "5px", ...borderStyle, 
        }}>
            <img src={picture} 
            style={{float: "left", margin: "3px 10px 3px 3px", border: "1px solid", borderColor: "black", padding: "1px", width: "170px", height: "170px", ...pictureStyle}}/>

            <div style={{margin: "auto", padding: "5px"}}>
            <h1 style={{...titleStyle}}>{title}</h1>
            <h2 style={{...descriptionStyle}}>{description}</h2>
            <ProgressBar percentage={percentage} sliderStyle={{...progressbarSliderStyle}} textStyle={{...progressbarTextStyle}} compontentStyle={{...progressbarStyle}}></ProgressBar>
            </div>
            <div>
            {children}
            </div>
        </div>
    );
};

export default Achievement;