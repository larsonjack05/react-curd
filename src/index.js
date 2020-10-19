import React from 'react';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "./firebase";



import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Table extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			  names:[],
			  
			  count:1
		};


	}
	
	 componentDidMount(){
	  const nameRef = firebase.ref('users');
	  nameRef.on('value', (snapshot)=> {
		  let names = snapshot.val();
		  let newState = [];
		  for (let name in names){
			  newState.push({
				  id:name,		 
				  name: names[name].name,
				  email:names[name].email,
				  bio:names[name].bio
			  });
		  }
		  this.setState({
			  names: newState
		  });
	  })
  }
  
   selectRow = (a,b,c,e) => {
    this.setState({  //to update form data
		formid: a,
		formname:b,
		formemail:c,
		formbio:e
	});
   this.setState({count:1});

  }
  
   handleSubmit = (event) => {
 this.setState({count:1});
    event.preventDefault();
	firebase.ref("/users").push({
		name: this.state.inputname,
		email: this.state.inputemail,
		bio: this.state.inputbio,
		
	});
  }
   myNameHandler = (event) => {
    this.setState({inputname: event.target.value});
	this.setState({count:1});
  }
  myEmailHandler = (event) => {
    this.setState({inputemail: event.target.value});
	this.setState({count:1});
  }
  myBioHandler = (event) => {
    this.setState({inputbio: event.target.value});
	this.setState({count:1});
  }

	
	
	
	render(){
		return (
		<div>
		<Router>
			<nav class="navbar navbar-inverse">
			  <div class="container-fluid">
				<div class="navbar-header">
				  <a class="navbar-brand" href="#">Firebase Reactjs Project</a>
				</div>
				<ul class="nav navbar-nav">
				  <li><Link to="/">Home</Link></li>
				  <li><Link to="about">About</Link></li>
				  
				  
				</ul>
			  </div>
			</nav>
		<Switch>
          <Route exact path="/about">
            <h1>Reactjs Firebase Realtime Table App</h1>
          </Route>
		</Switch>
		<Switch>
			<Route exact path="/">
				<div class="container">
					<form class="form-inline"  onSubmit={this.handleSubmit}>
					<label>Name:</label>
					<input autocomplete="off" type="text" name="name" onChange={this.myNameHandler} />
					<label>Email:</label>
					<input autocomplete="off" type="email" name="email" onChange={this.myEmailHandler} />
                    <label>Bio:</label>
					<input autocomplete="off" type="bio" onChange={this.myBioHandler} />
					<input type='submit' />
					</form>
					<table class="table">
					  <thead>
						<tr>
						  <th scope="col">#</th>
						  <th scope="col">Name</th>
						  <th scope="col">Email</th>
						  <th scope="col">Bio</th>
						  <th scope="col">Actions</th>
						</tr>
					  </thead>
					  <tbody>
					  {this.state.names.map((name) => {
						  
							return (
								
								<tr onClick={() => this.selectRow(name.id,name.name,name.email,name.bio)}>
									<td>{this.state.count++}</td>
									<td>{name.name}</td>
									<td>{name.email}</td>
									<td>{name.bio}</td>
									<td><button class="btn btn-danger" onClick={() => firebase.ref("/users").child(name.id).remove()}>Delete</button></td>
								</tr>
							)
						  
					  })}
						
					  </tbody>
					</table>
				</div>
			</Route>
		</Switch>
		</Router>
		</div>
		
		
		);
	}
}
function Add() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
