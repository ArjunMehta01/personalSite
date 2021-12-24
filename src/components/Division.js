import React from 'react';
import { useState } from 'react';

import styles from './Division.module.css';


import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import ButtonPair from './ButtonPair';

import Round from './Round.js';


import logo from '../logo.svg';

const Division = props => {

    const mediaSet = {'aboutMe': [<Round code='0' />, <div><p>I'm a third year computer software engineering student at the University of Alberta. In my spare time you can find me in the U of A engineering quad (pretending to study) or at the gym
                        {/* I like trying new things and am currently getting into nature photography (pics to come soon).*/}
                        . My favourite part about software engineering is that it allows me to be creative in solving new and challenging problems.
                        </p>
                        <ButtonPair />
                        </div>],
                    

                    'skills': [<div>
                        <h2><b>Technical Skills</b></h2>
                        <p>Some self serving bs</p><br/>
                        <h3>Languages</h3>
                        <p>Python, C, C++, Java, MATLAB, JavaScript, HTML, CSS, VHDL</p>
                        <h3>Frameworks/Packages</h3>
                        <p>React.js, Node.js, Pandas, Beautiful Soup</p>  
                    </div>,
                    <img src={logo} className="App-logo" alt="logo" />],

                    'project': [<Round code='1'/>,
                    <div>
                        <h2>
                            <b>What's Cookin'?</b>
                        </h2>
                        <p>How do i phrase this to say i do a lot and this is what I want to highlight?</p>
                    </div>]
                        };

    return (
        <div className={`${styles[props.content]}`}>
            <Container className={`${styles['Container']}`}>
                <Row>
                    <Col>
                        {mediaSet[props.content][0]}
                    </Col>

                    <Col>
                        <div>
                            {mediaSet[props.content][1]}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Division;