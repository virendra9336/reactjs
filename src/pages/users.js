import React from 'react'
import "../css/main.css";

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class Users extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
   event.preventDefault();
   const form = event.target;
   const data = new FormData(form);
   var object = {};
   data.forEach((value, key) => {object[key] = value});
   const apiUrl = '/save';
   const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
   myHeaders.append('Accept', 'application/json');
   const options = {
     method: 'POST',
     body: JSON.stringify(object),
     headers:myHeaders
   };

   fetch(apiUrl, options)
     .then(res => res.json())
     .then(result => {
       console.log(result)
      
       this.setState({
         response: result,
         isAddProduct: false,
         username:'',
         
       })
     },
     (error) => {
       this.setState({ error });
     }
     
   )
   event.target.reset();
 }
  render() {
    return (
      <div className="body">
       <form onSubmit={this.handleSubmit} noValidate>
  <label htmlFor="username">Username:</label>
  <input
    id="username"
    name="username"
    type="text"
    data-parse="uppercase"
  />
  <label htmlFor="email">Email:</label>
  <input id="email" name="email" type="email" />
  
  <label htmlFor="birthdate">Birthdate:</label>
  <input
    id="birthdate"
    name="birthdate"
    type="text"
    data-parse="date"
    placeholder="MM/DD//YYYY"
    pattern="\d{2}\/\d{2}/\d{4}"
    required
  />
  <button>Submit</button>
  </form>
      
      </div>
    
    
    );
  }
}
export default Users