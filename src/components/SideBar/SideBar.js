import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import { useStateValue } from '../../StateProvider';
import SideBarChats from '../SideBarChats/SideBarChats';
import db from '../../firebase';
import './SideBae.css';

const SideBar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src={user?.photoURL} />
        <div className='sidebar__header--right'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__search--container'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SideBarChats addNewChat />
        {rooms.map((room) => (
          <SideBarChats key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
