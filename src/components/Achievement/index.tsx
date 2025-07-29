import React from 'react';
import { Props } from './types';
import ProgressBar from '../ProgressBar';

const Achievement: React.FC<Props> = ({ title, description, picture, percentage }, {children}) => {
    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "red", borderRadius: "8px"}}>
            <img src={picture} style={{float: "left", margin: "3px", border: "1px solid", borderColor: "black", padding: "1px"}}/>

            <div style={{float: "right", padding: "5px"}}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <ProgressBar percentage={percentage}></ProgressBar>
            </div>
            {children}
        </div>
    );
};

export default Achievement;