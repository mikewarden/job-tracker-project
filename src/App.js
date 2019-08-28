import React from 'react';
import Form from './Form.js';
import './App.css';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      postings: [],
			compName : "Company Name Here",
    		posTitle : "Position Title Here",
    		date     : this.props.date
		}
	}

	render() { 
	    return (
	      <li key={this.date} className="post">
		      <details>
			      	<summary>{this.state.compName}</summary>
			      	<p>address, contact, etc.</p>
		      </details>
		      <details>
			      	<summary>{this.state.posTitle}</summary>
			      	<p>I have no idea</p>
		      </details>
	      </li>
	    	);
    }
}


class Postings extends React.Component {
    constructor(props) {
    	super(props);

    	this.state = {
    		posts : []
    	}
    }

    render() {
    	return ( 
    	   <Post date={new Date()}/>
    	)
    }
}

// Keeps track of all job postings the 
// client is interested in (ideas), has
// sent a resume to (applied) and has
// called/texted (called).
class JobTracker extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
        postType  : "ideas",
             date : null
  	}
  }


  // opens the form to create a new
  // posting
  handleClick = (event) => {
  	console.log("trigger");
  }

  render() {
    return (
      <div className="JobTracker">
        <h1>Job Tracker</h1>
        <ul className="Postings">
        <Postings action="add"/>
        </ul>
        <button onClick={this.handleClick} >+</button>
      </div>
    );
  }
}

export default JobTracker;
