import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';


import ProjectRow from './ProjectRow';
// import styles from './Division.module.css';

const ProjectGrid = props => {

    const tester = [{name: "Sadness Machine"}, {name: "Double Sad"}, {name: "kumb aya"}];


    return (
        <div style={{paddingBottom:'5%'}}>
        <Container>
            <ProjectRow source={[...tester]}/>
            <ProjectRow source={[...tester]}/>
      </Container>
      </div>
    );

};

export default ProjectGrid;