import React from 'react';
import { Wrapper } from './Average.styles';

const Average = (props) => <Wrapper average={props.average}>{props.average}</Wrapper>;

export default Average;
