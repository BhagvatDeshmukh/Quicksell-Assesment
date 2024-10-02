import React, { useCallback, useEffect } from 'react'
import Header from './components/Header/Header'
import context from './storedContexts'
import { useState } from 'react'
import Group from './components/Group/Group'
import axios from 'axios';
import './App.css'

const priorityMap = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority'
};


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') ?? 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') ?? 'priority');
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupedTicketsall, setGroupedTicketsall] = useState({});
  

  useEffect(() => {
    async function fetchdata(){
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchdata();
  }, []);


  const groupTickets = useCallback(() => {
    let groupedTickets = {};
    let statusacc={
      
        Backlog:[],
        Todo:[],
       'In progress':[],
        
        Cancelled:[],
        Done: []
        
    };
    let priorityacc={
      'Urgent':[],
      'High': [],
      'Medium': [],
      'Low': [],
      'No priority':[]
    }
    

    if (grouping === 'status') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return {...statusacc,...acc};
      }, {});
    } else if (grouping === 'user') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        (acc[user.name] = acc[user.name] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        (acc[priorityMap[ticket.priority]] = acc[priorityMap[ticket.priority]] || []).push(ticket);
        return {...priorityacc,...acc};
      }, {});
    }
    // console.log(groupedTickets)
    return groupedTickets;
  }, [grouping, tickets, users]);

  const sortTickets = useCallback((ticketsToSort) => {
    if (sorting === 'priority') {
      return ticketsToSort.sort((a, b) => b.priority - a.priority);
    } else if (sorting === 'title') {
      return ticketsToSort.sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketsToSort;
  }, [sorting]);

  useEffect(() => setGroupedTicketsall(() => groupTickets()), [groupTickets]);

  return (
    <context.Provider value={{ isOpen, setIsOpen, grouping, setGrouping, sorting, setSorting, tickets, users, groupedTicketsall, setGroupedTicketsall,priorityMap }}>
      <div>
        <Header />
        <div className="kanban-board">
          {Object.entries(groupedTicketsall).map(([group, tickets]) => (
            <Group key={group} sortedTickets={sortTickets(tickets)} group={group}/>
          ))}
        </div>
      </div>
    </context.Provider>
  )
}

export default App