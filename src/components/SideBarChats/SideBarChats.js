import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

import db from '../../firebase';
import './SideBarChats.css';

const SideBarChats = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState('');

  useEffect(() => {
    setSeed(Math.random() * 5000);
  }, []);

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const createChat = () => {
    const roomName = prompt('enter name for room chat');
    if (roomName) {
      //do something
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarchats'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarchats__info'>
          <h2>{name}</h2>
          <p>{messages[0]?.message} </p>
        </div>
      </div>
    </Link>
  ) : (
    <div className='sidebarchats' onClick={createChat}>
      <h1>Add new chat</h1>
    </div>
  );
};

export default SideBarChats;
