import React from 'react';

class RouletteGun extends React.Component{
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {chamber: null,
                     spinningTheChamber: false                
                     }
        this.myvar = null;
      }
      
      renderDisplay = () =>{
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            clearInterval(this.myvar);
            return 'BANG!!!!!'
        } else {
            clearInterval(this.myvar);  
            return 'you\'re safe!'
        }
      }

      handleButtonClick = () =>{
          this.setState({
              spinningTheChamber: true,
          })
          this.myvar = setInterval(() => {
              let random = Math.ceil(Math.random() * 8)
              
              this.setState({
                  chamber: random,
                  spinningTheChamber: false
              })
          }, 2000);
      }
      
    render() {
    console.log('render')
      return (
        <div className='RouletteGun'>
            <p>{this.renderDisplay()}</p>
            <button 
            onClick={this.handleButtonClick}
          >
            Pull the trigger!
          </button>
        </div>
      )
    }

    }


export default RouletteGun