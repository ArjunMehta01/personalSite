import React from 'react';
import { useState } from 'react';

import me from '../media/image.JPG'

import mountain from '../media/6F678549-438A-481F-AD9F-C43E92024CCD.JPG'

import './Round.css';

const Round = props => {

    return (
        <div>
            <img className='image' src={props.code === '0' ? me : mountain} alt="Me" />
        </div>
    );

};


export default Round;