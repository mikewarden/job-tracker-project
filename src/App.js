import React from 'react';
import Form from './Form.js';
import './App.css';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
   //    postings: {},
			// compName : "Company Name Here",
   //  		posTitle : "Position Title Here",
   //  		date     : this.props.date
		}
	}

  // onSubmit = (postings) => {
  //   console.log(postings);
  //   this.setState({ 
  //     postings: {
  //       ...this.state.postings,
  //       posting 
  //       }
  //   });
  // }


	render() { 

     const listStyle = {
        listStyleType : "none",
        border: "bisque 5px",
        borderStyle: "double solid outset",
        borderRadius: "15vw",
        textAlign: "center"
     };

//    let newPost = JSON.stringify(this.state.postings, null, 2);
//        <Form onSubmit={(postings) => this.onSubmit(postings)}/>
//        <p>{newPost}</p>
//        <p>{this.state.postings.company}</p>
	    return (
        <div>
	      <li className="post" style={listStyle}>
		      <details>
			      	<summary>{this.props.p.compName}</summary>
			      	<p>address, contact, etc.</p>
		      </details>
		      <details>
			      	<summary>{this.props.p.posTitle}</summary>
			      	<p>I have no idea</p>
		      </details>
	      </li>
        </div>
	    	);
    }
}


class Postings extends React.Component {
    constructor(props) {
    	super(props);

    	this.state = {
    	}
    }

    render() {
    	return ( 
        this.props.posts.map( item => (
    	      <Post key={item.id} p={item}/>
         ))
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
        postList : [{
            id       : 0,
            postType : "ideas",
            compName : "Company Name Here",
            posTitle : "Position Title Here",
            date     : this.props.date
        },{
            id       : 1,
            postType : "ideas",
            compName : "Company Name Here",
            posTitle : "Position Title Here",
            date     : this.props.date
        }
        ]
  	}
  }


  // opens the form to create a new
  // posting
  // handleClick = (event) => {
  // 	console.log("trigger");
  // }

  render() {
    return (
      <div className="JobTracker">
        <h1>Job Tracker</h1>
        <ul className="Postings">
        <Postings posts={this.state.postList}/>
        </ul>
        <button onClick={this.handleClick} >+</button>
      </div>
    );
  }
}

export default JobTracker;
