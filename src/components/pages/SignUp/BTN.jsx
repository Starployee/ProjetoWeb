import React from "react"

class IconButton extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: false,
      }
    } 
  
    render() {
      return (
        <a className="btn btn-primary" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
          { this.state.isCardView
            ? <span className="glyphicon glyphicon-remove-sign" />
            : <span className="glyphicon glyphicon-ok-sign" />
          }
          &nbsp;&nbsp;BUTTON
        </a>
      );
    }
  
  }
  
  class App extends React.Component { 
    render () {                                        
      return (
        <div>
          <IconButton />  
        </div>
      );
    }
  }

export default App