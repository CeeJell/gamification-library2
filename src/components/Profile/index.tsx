import React from 'react';
import { Props } from './types';

const Profile: React.FC<Props> = ({ username, profilePicture, children }) => {
    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "red", borderRadius: "8px", width: "350px", height: "110px"}}>
            <img src={profilePicture} style={{float: "left", margin: "3px", border: "1px solid", borderColor: "black", padding: "1px", width: "100px", height: "100px" }}/>

            <div style={{padding: "5px", display: "flex", alignItems: "center", justifyContent: "center",}}>
            <h1 style={{margin: "auto", textDecorationLine: "underline", padding: "10px", fontSize: "28px"}}>{username}</h1>
            </div>
            <div>
            {children}
            </div>
        </div>
    );
};

export default Profile;