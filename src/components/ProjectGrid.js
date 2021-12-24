import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';


import ProjectRow from './ProjectRow';
// import styles from './Division.module.css';

const ProjectGrid = props => {

    const tester = [{name: "basketball_analysis", link: 'https://github.com/ArjunMehta01/basketball_analysis', info: 'A python package for fantasy basketball points prediction.'}, 
                    {name: "letsgetthisbread.space", link: "https://github.com/ArjunMehta01/Bon_Hacketit", info: 'A web app that fetches recipes based on limited ingredients.'}, 
                    {name: "this website", link: 'https://github.com/ArjunMehta01/personalsite', info: 'The repo for this website.'}];


    return (
        <div style={{paddingBottom:'5%'}}>
        <Container>
            <ProjectRow source={[...tester]}/>
            {/* <ProjectRow source={[...tester]}/> */}
      </Container>
      </div>
    );

};

export default ProjectGrid;