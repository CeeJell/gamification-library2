import React from 'react';
import { Props } from './types';

const ProgressBar: React.FC<Props> = ({ percentage, style = {} }) => {
    return (
        <>
            <progress style={{accentColor: "red", ...style}} value={percentage} max="100"></progress>
        </>
    );
};

export default ProgressBar;