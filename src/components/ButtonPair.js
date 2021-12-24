import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import styles from  './ButtonPair.module.css';

const ButtonPair = () => {
    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);

    return (
        <Container>
            <Row>
                <Col><div
                className={`${isHover ? styles['hover-offsite-button'] : styles['offsite-button']}`}
                     onMouseEnter={() => setIsHover(true)}
                     onMouseLeave={() => setIsHover(false)}
                     onClick={()=> window.open("https://github.com/ArjunMehta01", "_blank")}
                    >GitHub</div></Col>

                <Col><div 
                className={`${isHover2 ? styles['hover-offsite-button'] : styles['offsite-button']}`}
                     onMouseEnter={() => setIsHover2(true)}
                     onMouseLeave={() => setIsHover2(false)}
                     onClick={()=> window.open("https://www.linkedin.com/in/arjunmehta01/", "_blank")}
                    >LinkedIn</div></Col>
            </Row>
        </Container>
    );
};

export default ButtonPair;