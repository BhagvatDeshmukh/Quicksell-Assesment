import React, { useContext, useEffect } from 'react'
// import { useState } from 'react';
import DisplayIcon from "./DisplayIcon";
import DownIcon from './DownIcon';
import './Display.css';
import context from '../../storedContexts';

function Display() {

  const {isOpen,setIsOpen,grouping,setGrouping,sorting,setSorting}=useContext(context);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);


  return (
    <div className="display-container">
      <div className='display-box' onClick={toggleMenu}>
        <DisplayIcon style={{ marginRight: '2px', marginLeft: '2px' }} />
        Display
        <DownIcon className="downicon" />
      </div>
      {isOpen && (
        <div className="menu">
          <div className="menu-item">
            <label htmlFor="grouping">Grouping</label>
            <select id="grouping" name="grouping" value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="menu-item">
            <label htmlFor="ordering">Ordering</label>
            <select id="ordering" name="ordering" value={sorting} onChange={(e) => setSorting(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default Display