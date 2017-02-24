import React, { Component } from 'react'
import logo from './logo.svg'
import Chat from './Chat'
import './App.css'

class App extends Component {
  state = { messages: [] }

  send = message => this.setState({ messages: this.state.messages.concat(message) })

  render () {
    const { messages } = this.state
    return (
      <div className='App'>

        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to SelfChat</h2>
        </header>

        <section className='App-body'>
          <Chat title='Chat A' send={this.send} messages={messages} />
          <Chat title='Chat B' send={this.send} messages={messages} />
        </section>

      </div>
    )
  }
}

export default App
