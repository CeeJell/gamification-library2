import React, { useState } from 'react';
import { Props } from './types';
import Achievement from '../Achievement';


const AchievementList: React.FC<Props> = ({ title, description, picture, percentage, id, profileId }) => {

    const [Achievements, setAchievements] = useState([]);


    return (
        <div>
            <Achievement title={title} description={description} picture={picture} percentage={percentage} id={id} profileId={profileId}></Achievement>

            <select id='achievement' name='achievement' required>
                
            </select>
        </div>
    );
};

export default AchievementList;