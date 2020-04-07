import React from 'react'
import "../css/main.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
          
        this.state = {
          
           content: "contact from state...",
           footer: "Header from state...",
        }
     }


  render() {
    return (
   <div className="body">
       <h1>Contact page</h1>        
       </div>
     
    );
  }
}

  


export default Contact