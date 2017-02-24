import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField/TextField'
import IconButton from 'material-ui/IconButton'
import SendSVG from 'material-ui/svg-icons/content/send'
import { teal100 } from 'material-ui/styles/colors'

class Actions extends Component {
  static propTypes = {
    send: PropTypes.func
  }

  state = { message: '' }

  reset = () => this.setState({ message: '' })

  handleChange = (event, message) => this.setState({ message })

  // TODO: /!\ escape dangerous characters !
  send = () => {
    this.props.send(this.state.message)
    this.reset()
  }

  render () {
    return (
      <section style={{ display: 'flex', alignItems: 'center' }}>

        <TextField
          name='Textfield'
          floatingLabelText='Message'
          multiLine
          value={this.state.message}
          onChange={this.handleChange}
          style={{ flex: 1, marginRight: 20 }}
        />

        <IconButton
          tooltip='Envoyer'
          onTouchTap={this.send}
          hoveredStyle={{ backgroundColor: teal100 }}
        >
          <SendSVG />
        </IconButton>

      </section>
    )
  }
}

export default Actions
