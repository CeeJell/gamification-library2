import React from 'react';
import { Props } from './types';

const Profile: React.FC<Props> = ({ username, profilePicture, children }) => {
    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "red", borderRadius: "8px", }}>
            <img src={profilePicture} style={{float: "left", margin: "3px", border: "1px solid", borderColor: "black", padding: "1px", width: "100px", height: "100px" }}/>

            <div style={{float: "right", padding: "5px"}}>
            <h1 style={{margin: "auto", textDecorationLine: "underline", padding: "10px"}}>{username}</h1>
            </div>
            <div>
            {children}
            </div>
        </div>
    );
};

export default Profile;