import React from 'react';
import { Props } from './types';


const ProfilePage: React.FC<Props> = ({ children, username, style }) => {

    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "#FF0099", borderRadius: "8px", 
        width: "1500px", height: "250px", ...style}}>

            <div style={{margin: "auto"}}>
            <h1 style={{textDecorationLine: "underline", textAlign: "center"}}>{ username }</h1>
            </div>
            <div style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "center", margin: "3px"}}>
            {children}
            </div>
        </div>
    );
};

export default ProfilePage;