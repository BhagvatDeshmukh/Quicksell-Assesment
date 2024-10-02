import React from 'react'
import { ReactComponent as HighPriority } from './Img - High Priority.svg';
import { ReactComponent as LowPriority } from './Img - Low Priority.svg';
import { ReactComponent as MediumPriority } from './Img - Medium Priority.svg';
import { ReactComponent as NoPriority } from './No-priority.svg';
import { ReactComponent as UrgentPriorityColour } from './SVG - Urgent Priority colour.svg';
// import { ReactComponent as UrgentPriority } from './SVG - Urgent Priority grey.svg';
import './Priority.css'

const list={
    'Urgent':<UrgentPriorityColour />,
    'High': <HighPriority />,
    'Medium': <MediumPriority />,
    'Low': <LowPriority />,
    'No priority':<NoPriority />
};

function PriorityIcon({priority}) {
  return (
    <span className="icon">
        {list[`${priority}`]}
    </span>
  )
}



export default PriorityIcon
