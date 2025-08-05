import React from 'react';
import { Props } from './types';


const FriendList: React.FC<Props> = ({ children }) => {

    return (
        <div style={{border: "3px solid ", content: "", clear: "both", display: "table", borderColor: "#FF0099", borderRadius: "8px", 
        width: "1050px", height: "250px"}}>

            <div style={{margin: "auto"}}>
            <h1 style={{textDecorationLine: "underline", textAlign: "center"}}>Friends</h1>
            </div>
            <div style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "center", margin: "3px"}}>
            {children}
            </div>
        </div>
    );
};

export default FriendList;