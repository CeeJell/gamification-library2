import React from 'react';
import { Props } from './types';

const ProgressBar: React.FC<Props> = ({ percentage }) => {
    return (
        <>
            <progress style={{accentColor: "red"}} value={percentage} max="100"></progress>
        </>
    );
};

export default ProgressBar;