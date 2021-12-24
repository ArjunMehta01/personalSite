import React from 'react';
import { useState } from 'react';

import styles from './ProjectCard.module.css';

const ProjectCard = props => {
    const [isHover, setIsHover] = useState(false);



    const brah = () => {alert("wow")};

    return(
        <div className={`${isHover ? styles['card-hover'] : styles['card']}`}
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
         onClick={brah}
        >
        <p>suck my asshole</p>
        </div>
    );

};

export default ProjectCard;