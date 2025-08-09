import React from 'react';
import { Props } from './types';
import ProgressBar from '../ProgressBar';

const Achievement: React.FC<Props> = ({ title, description, picture, percentage, children, style }) => {
    
    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "red", borderRadius: "8px",
            width: "465px", height: "180px", padding: "5px", margin: "5px", ...style, 
        }}>
            <img src={picture} style={{float: "left", margin: "3px 10px 3px 3px", border: "1px solid", borderColor: "black", padding: "1px", width: "170px", height: "170px"}}/>

            <div style={{margin: "auto", padding: "5px"}}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <ProgressBar percentage={percentage} ></ProgressBar>
            </div>
            <div>
            {children}
            </div>
        </div>
    );
};

export default Achievement;