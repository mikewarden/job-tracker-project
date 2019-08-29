import React from 'react';
import Form from './Form.js';
import './App.css';

class Post extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
 //   //    postings: {},
			// compName : "Company Name Here",
   //  		posTitle : "Position Title Here",
   //  		date     : this.props.date
	// 	}
	// }

  // onSubmit = (postings) => {
  //   console.log(postings);
  //   this.setState({ 
  //     postings: {
  //       ...this.state.postings,
  //       posting 
  //       }
  //   });
  // }

   // dynamic style!
   listStyle = () => {
      if (this.props.p.postType === "ideas") {
          return { backgroundColor : "red" };

      } else if (this.props.p.postType === "applied") {
          return { backgroundColor : "blue" };

      } else if (this.props.p.postType === "contacted")
          return { backgroundColor : "green" };
   };
  
	render() { 
      const {id, filter, postType, compName, posTitle, date} = this.props.p;

      const btn1Style = {
            background : "black",
                 color : "white",
               padding : "5px",
          borderRadius : "10px",
                cursor : "pointer",
                float  : "right"
      };

      const btn2Style = {
            background : "black",
                 color : "white",
               padding : "5px",
          borderRadius : "10px",
                cursor : "pointer",
                float  : "left"
      };

//    let newPost = JSON.stringify(this.state.postings, null, 2);
//        <Form onSubmit={(postings) => this.onSubmit(postings)}/>
//        <p>{newPost}</p>
//        <p>{this.state.postings.company}</p>
	    return (
        <div>
	      <li className={ filter ? "nopost" : "post"} style={this.listStyle()}>
          <button onClick={this.props.deletePost.bind(this, id)} style={btn1Style}>X</button>
          <button onClick={this.props.filterPost.bind(this, postType)} style={btn2Style}>F</button>
		      <details>
			      	<summary>{compName}</summary>
			      	<p>address, contact, etc.</p>
		      </details>
		      <details>
			      	<summary>{posTitle}</summary>
			      	<p>I have no idea</p>
		      </details>
          <p>{date}</p>
	      </li>
        </div>
	    	);
    }
}


class Postings extends React.Component {

    render() {
    	return ( 
        this.props.posts.map( item => (
    	      <Post key={item.id} p={item} deletePost={this.props.deletePost} filterPost={this.props.filterPost}/>
         ) )
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
            filter   : false,
            postType : "ideas",
            compName : "Company Name Here",
            posTitle : "Position Title Here",
            date     : Date()
        },{
            id       : 1,
            filter   : false,
            postType : "applied",
            compName : "Company Name Here",
            posTitle : "Position Title Here",
            date     : Date()
        },{
            id       : 2,
            filter   : false,
            postType : "contacted",
            compName : "Company Name Here",
            posTitle : "Position Title Here",
            date     : Date()
        }
        ]
  	}
  }


  deletePost = (id) => {
    this.setState({
      postList : [...this.state.postList.filter(item => item.id !== id )]
    });
  }

  filterPost = (type) => {
    console.log("type is: " + type);
    let posts = this.state.postList.slice();
    posts.forEach( item => {
        if (item.postType !== type ) {
           item.filter = !item.filter;
        }
    })
    this.setState({
      postList : posts
    })

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
        <Form addPost={this.addPost}/>
        <ul className="Postings">
        <Postings posts={this.state.postList} deletePost={this.deletePost}
                                              filterPost={this.filterPost}/>
        </ul>
        <button onClick={this.handleClick} >+</button>
      </div>
    );
  }
}

export default JobTracker;
