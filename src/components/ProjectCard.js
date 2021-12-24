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
         onClick={()=> window.open(props.project.link, "_blank")}
        >
        <p><b>{props.project.name}</b></p>
        <p>{props.project.info}</p>
        </div>
    );

};

export default ProjectCard;