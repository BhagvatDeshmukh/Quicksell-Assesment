import React, { useContext } from 'react'
import { ReactComponent as AddIcon } from './add.svg'
import { ReactComponent as DotIcon } from './3 dot menu.svg'
import './GroupHeader.css'
import context from '../../storedContexts'
import PriorityIcon from '../PriorityIcon/PriorityIcon'
import StatusIcon from '../StatusIcon/StatusIcon'
import UserIcon from '../UserIcon/UserIcon'
import './GroupHeader.css'

function GroupHeader({ grouptitle, count }) {
    const { grouping ,users} = useContext(context);
    // const [user,setUser]=useState('');
    if(grouping==="user"){
        // setUser ();
        // console.log(user);
    }
    // console.log(grouping)
    return (
        <div className='group-header'>
            <div className='p-1'>
            {grouping === 'user' && <UserIcon user={users.find(u => u.name === grouptitle)}/> }
            {
                grouping === 'status' && <StatusIcon status={grouptitle}/>
            }
            {
                grouping === 'priority' && <PriorityIcon priority={grouptitle} /> 
            }
            <span>{grouptitle}</span>
            <span className='gray'>{count}</span>
            </div>
            
            <div className='p-2'>
            <AddIcon className='gray' />
            <DotIcon className='gray' />
            </div>
        </div>
    )
}

export default GroupHeader