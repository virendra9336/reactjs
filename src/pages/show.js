import React from 'react'

import "../css/main.css";

class Show extends React.Component {

  constructor(props) {
		super(props);
    this.state = {
      users: [],
      singleUser:''
    };
   
    this.singleRecord = this.singleRecord.bind(this);
  }

  

  singleRecord(e,item) {
    e.preventDefault();
    alert(item.username);
    const apiUrl = '/getAll/'+item.username;
    const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
   myHeaders.append('Accept', 'application/json');
   const options = {
     method: 'GET',
     
     headers:myHeaders
   };

   fetch(apiUrl, options)
     .then(res => res.json())
     .then(result => {
       console.log(result);
       this.setState({
        users: result,
      })
     },
     (error) => {
       this.setState({ error });
     })


 }
  
  componentDidMount() {
		const apiUrl = '/getAll';
   const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
   myHeaders.append('Accept', 'application/json');
   const options = {
     method: 'GET',
     
     headers:myHeaders
   };

   fetch(apiUrl, options)
     .then(res => res.json())
     .then(result => {
       console.log(result);
       this.setState({
        users: result,
      })
     },
     (error) => {
       this.setState({ error });
     })
   

	}


  render() {
    return (
      <div className="body">
<table>
				<thead>
					<tr>
					<th>username</th>
          <th>email</th>
          <th>birthdate</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.users.map(function (item, key){             
						return (
								<tr key = {key}>
								  <td><a href="#" onClick= {(e) => this.singleRecord(e,item)}>{item.username}</a></td>
								  <td>{item.email}</td>
								  <td>{item.birthdate}</td>
								 
								</tr>
							)
          }.bind(this))
          }
				</tbody>
			</table>
     

      </div>
    
    
    );
    
  }
}
export default Show