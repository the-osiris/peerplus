import React from 'react'
import Navbar from '../components/Navbar';
import ChatArea from '../components/Chat/ChatArea';
import MyChat from '../components/Chat/MyChat';

function Chat() {
  return (
    <div className="flex w-full h-full bg-[#F6F6F6]">
      <Navbar />
      <ChatArea />
      <MyChat />
    </div>
  );
}

export default Chat
