import React from 'react';
import { Props } from './types';

const Achievement: React.FC<Props> = ({ title, description, picture }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <img src={picture}/>
        </>
    );
};

export default Achievement;