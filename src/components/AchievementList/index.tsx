import React, { useState } from 'react';
import { Props } from './types';


const AchievementList: React.FC<Props> = ({ children }) => {

    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "#FF0099", borderRadius: "8px", width: "1000px", height: "400px"}}>

            <div style={{margin: "auto"}}>
            <h1 style={{textDecorationLine: "underline", textAlign: "center"}}>Achievements</h1>
            </div>
            <div>
            {children}
            </div>
        </div>
    );
};

export default AchievementList;