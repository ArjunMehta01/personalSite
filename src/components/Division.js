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

    const mediaSet = {'aboutMe': [<Round code='0' />, <div><p>
                            I'm a third year computer software engineering student at the University of Alberta.  In my spare time you can find me in the U of A engineering quad (pretending to study) or at the gym. My favourite part of software engineering is that it allows me to be creative in solving new and challenging problems.
                        </p>
                        <ButtonPair />
                        </div>],
                    

                    'skills': [<div>
                        <h2><b>Technical Skills</b></h2>
                        <h3>Languages</h3>
                        <p>Python, C, C++, Java, MATLAB, JavaScript, HTML, CSS, VHDL</p>
                        <h3>Frameworks/Packages</h3>
                        <p>React.js, Node.js, Pandas, Beautiful Soup, Selenium, Bootstrap</p>  
                        <br/>
                        <p>I also have experience working with Google Firebase for personal and professional projects.</p>
                    </div>,
                    <img src={logo} className="App-logo" alt="logo" />],

                    'project': [<Round code='1'/>,
                    <div>
                        <h2>
                            <b>What's Cookin'?</b>
                        </h2>
                        <p>I’m always looking to apply my skill set in new and interesting ways. I’m currently learning about the fundamentals of blockchain with the aim to launch my own cryptocurrency. <br/><br/>I’m also working to develop my nature photography skills as a side hobby. 
</p>
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