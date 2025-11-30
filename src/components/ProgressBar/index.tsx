import React from 'react';
import { Props } from './types';

const ProgressBar: React.FC<Props> = ({ percentage, sliderStyle, textStyle, compontentStyle }) => {
    return (
        <>
        <div style={{display:"inline-block", ...compontentStyle}}>
            <progress style={{accentColor: "red", ...sliderStyle}} value={percentage} max="100"></progress>
            <h3 style={{textAlign: "center", margin:"0", padding:"0", ...textStyle}}>{percentage}</h3>
        </div>
        </>
    );
};

export default ProgressBar;