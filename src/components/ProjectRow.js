import React from 'react';
import { useState } from 'react';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProjectCard from './ProjectCard';

const ProjectRow = props => {
    return (<Row>
            {props.source.map((project) => {
                return <Col><ProjectCard project={{...project}}/></Col>
            })}
        </Row>);
};

export default ProjectRow;