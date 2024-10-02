import React, { useContext } from 'react';
import './Card.css'; // Import the CSS for styling
import UserIcon from '../UserIcon/UserIcon';
import PriorityIcon from '../PriorityIcon/PriorityIcon';
import StatusIcon from '../StatusIcon/StatusIcon';
import context from '../../storedContexts';

const TaskCard = ({ticket}) => {
  const { grouping,priorityMap,users } = useContext(context);
  // const [user,setUser]=useState('');
  if(grouping==='user'){
    
  } 
  return (
    <div className="task-card">
      <div className="task-header">
        <span className="task-id">{ticket.id}</span>
        {grouping === 'user' || <UserIcon user={users.find(u => u.id === ticket.userId)} />}
      </div>
      <div className="task-title">
        {grouping === 'status' || <StatusIcon  status={ticket.status}/>}
       <span className='text'>{ticket.title}</span>
      </div>
      <div className="task-footer">
        <div className="task-priority">
          {grouping === 'priority' || <PriorityIcon priority={priorityMap[ticket.priority]}/>}
        </div>
        <div className="task-type"><div className='blackdot'></div><div>{ticket.tag}</div></div>
      </div>
    </div>
  );
};

export default TaskCard;
