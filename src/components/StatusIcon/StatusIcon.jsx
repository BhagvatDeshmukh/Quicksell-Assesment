import React from 'react'
import { ReactComponent as Todo } from './To-do.svg';
import { ReactComponent as Backlog } from './Backlog.svg';
import { ReactComponent as Cancelled } from './Cancelled.svg';
import { ReactComponent as Done } from './Done.svg';
import { ReactComponent as InProgress } from './in-progress.svg';

const list={
    Todo:<Todo />,
    Backlog:<Backlog />,
    Cancelled:<Cancelled />,
    Done: <Done />,
    'In progress':<InProgress />
};

function StatusIcon({status}) {
  return (
    list[`${status}`]
  )
}


export default StatusIcon