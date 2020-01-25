import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {gretee: 'world'}
      }
    handleFriendClick = () => {
        this.setState({gretee: 'friend'})
        console.log(this.state.gretee)
      }
    handleReactClick = () => {
        this.setState({gretee: 'react'})
        console.log(this.state.gretee)
    }
    handleWorldClick = () => {
        this.setState({gretee: 'world'})
        console.log(this.state.gretee)
    }
    render() {
      return (
        <div>
          <p>Hello {this.state.gretee}!</p>
          <button 
            onClick={this.handleFriendClick}
          >
            Friend
          </button>
          <button 
            onClick={this.handleReactClick}
          >
            React
          </button>
          <button 
            onClick={this.handleWorldClick}
          >
            World
          </button>
        </div>
      )
    }
  }

  export default HelloWorld