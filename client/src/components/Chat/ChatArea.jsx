import React, { useEffect, useRef, useState } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";

function ChatArea({
  activeInteraction,
  setActiveInteraction,
  totalMessages,
  setTotalMessages,
}) {
  const inputRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const [message, setMessage] = useState("");
  function handleMessageSend() {
    const message = inputRef.current.value;
    if (message.trim() === "") return;
    const newMessage = {
      text: message,
      sender: "user",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      }),
    };
    const newMessages = [...activeInteraction.messages, newMessage];
    const newActiveInteraction = {
      ...activeInteraction,
      messages: newMessages,
    };
    const newTotalMessages = totalMessages.map((message) =>
      message.username === newActiveInteraction.username
        ? newActiveInteraction
        : message
    );
    setTotalMessages(newTotalMessages);
    setActiveInteraction(newActiveInteraction);
    inputRef.current.value = "";
  }

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    setMessage((prevMessage) => prevMessage + emojiObject.emoji); // Append the selected emoji to the message
    setShowEmojiPicker(false); // Optionally close the picker after selection
  };

  useEffect(() => {
    if (activeInteraction !== null) {
      inputRef.current.focus();
    }

    console.log(totalMessages);
  }, [totalMessages]);

  return (
    <div className="w-[60%] h-screen border-l-[1px] border-r-[1px] border-gray-200 flex flex-col gap-4">
      {activeInteraction === null ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-semibold text-gray-500">
            Select a chat to start messaging
          </p>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-4 relative">
          <div className="h-1/5 flex items-center justify-center gap-2 bg-white px-6 py-4">
            <div className="flex flex-col items-center justify-center gap-1">
              <img
                src={activeInteraction.imageUrl}
                alt={activeInteraction.username}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <p className="text-xl font-semibold">
                {activeInteraction.fullName}
              </p>
              <div className="flex justify-center items-center gap-2">
                <p className="text-sm text-gray-500">
                  {activeInteraction.username}
                </p>
                <p className="text-sm text-gray-500">Peer</p>
                <p className="text-sm text-gray-500">
                  {activeInteraction.subject}
                </p>
              </div>
            </div>
          </div>

          <div className="h-3/4 flex flex-col gap-4 px-4 relative">
            {activeInteraction.messages.map((message) => (
              <div
                key={message.text}
                className={`flex flex-col gap-2 ${
                  message.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`flex items-center gap-2 ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src={activeInteraction.imageUrl}
                    alt={activeInteraction.username}
                    className="w-8 h-8 rounded-full"
                  />
                  <div
                    className={`px-4 py-2 rounded-md ${
                      message.sender === "user"
                        ? "bg-[#4461F2] text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{message.time}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 bg-white px-6 py-4 relative">
            <div className="w-full h-full flex items-center justify-between gap-2 bg-white px-2 py-1 shadow-md rounded-full border border-gray-300">
              <HiOutlineEmojiHappy
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-2xl text-[#4461F2] hover:cursor-pointer"
              />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a message"
                value={message} // Bind the input to the message state
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-2 py-2 bg-transparent focus:outline-none text-gray-700"
              />
              <button
                onClick={handleMessageSend}
                className="text-[#4461F2] font-semibold"
              >
                <IoSend className="text-xl" />
              </button>
            </div>

            <div className="absolute bottom-20 left-6">
              <EmojiPicker
                open={showEmojiPicker}
                onEmojiClick={onEmojiClick}
                width={400}
                height={300}
                pickerStyle={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  zIndex: 10,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatArea;
