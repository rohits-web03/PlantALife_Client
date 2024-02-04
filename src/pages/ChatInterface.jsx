import React, { useState, useEffect } from 'react';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

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
      setMessages([...messages, { text: input, sender: 'user' }, { text: data, sender: 'bot' }]);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    console.log(messages); // Log the messages array after it's been updated
  }, [messages]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full overflow-y-auto border border-gray-300 rounded-lg p-4">
        {messages.map((message, index) => (
          <div key={index} className={`text-white w-full rounded-lg p-2 ${message.sender === 'user' ? 'bg-blue-500 self-end' : 'bg-gray-700 self-start'} mb-2 max-w-md break-words h-fit`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 w-full max-w-lg flex">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none" placeholder="Type a message..." />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
