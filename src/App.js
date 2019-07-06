import React, { useState } from 'react';
import './App.css';
import Chat from './Chat';
import logo from './logo.svg';

export default function App() {
  const [messages, setMessages] = useState([]);

  const send = (newMessage) => setMessages(messages.concat(newMessage));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to SelfChat</h2>
      </header>

      <section className="App-body">
        <Chat title="Chat A" send={send} messages={messages} />
        <Chat title="Chat B" send={send} messages={messages} />
      </section>
    </div>
  );
}
