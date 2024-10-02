import React from 'react'
import GroupHeader from '../GroupHeader/GroupHeader'
import Card from'../Card/Card'
import './Group.css'

function Group({group,sortedTickets}) {
  return (
    <div className="column">
        <GroupHeader grouptitle={group} count={sortedTickets.length}/>
        {sortedTickets.map((ticket)=>
            <Card ticket={ticket} key={ticket.id}/>
        )}
    </div>
  )
}

export default Group