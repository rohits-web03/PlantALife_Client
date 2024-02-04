import React, { useState, useEffect, useRef } from 'react';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Send input to the API and receive response
    try {
      const response = await fetch('https://plantalife-ml.onrender.com/generative_ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      setMessages([...messages, { text: data, sender: 'bot' }]);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200">
      <div ref={chatContainerRef} className="w-full max-w-lg h-full overflow-y-auto border border-gray-300 rounded-lg p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} mb-2`}>
            <div className={`rounded-lg p-2 max-w-md break-words ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-white text-gray-800 self-start'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 w-full max-w-lg flex">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none" placeholder="Type a message..." />
        <button onClick={()=>{setMessages([...messages, { text: input, sender: 'user' }]);}}
        type="submit" className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
