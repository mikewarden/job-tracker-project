import React from 'react';
import Form from './Form.js';
import './App.css';

class Post extends React.Component {
    
    streetAddress = (addr, pStyle) => {
      if (addr) {
         return <p style={pStyle}>Address: {addr}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    cityState = (city, pStyle) => {
      if (city) {
         return <p style={pStyle}>City, State: {city}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    zipcode = (zip, pStyle) => {
      if (zip) {
         return <p style={pStyle}>Zip: {zip}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    contactName = (name, pStyle) => {
      if (name) {
         return <p style={pStyle}>Contact: {name}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    contactNumber = (num, pStyle) => {
      if (num) {
         return <p style={pStyle}>Cell: {num}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    interviewDate = (interview, pStyle) => {
      if (interview) {
         return <p style={pStyle}>Interview Date: {interview}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    phoneCallDate = (callD, pStyle) => {
      if (callD) {
         return <p style={pStyle}>Contacted: {callD}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    positionId = (id, pStyle) => {
      if (id) {
         return <p style={pStyle}>Job Id: {id}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    positionUrl = (url, pStyle) => {
      if (url) {
         return <p style={pStyle}>url: {url}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    positionSalary = (salary, pStyle) => {
      if (salary) {
         return <p style={pStyle}>Salary: {salary}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

    positionDeadline = (deadline, pStyle) => {
      if (deadline) {
         return <p style={pStyle}>Deadline: {deadline}</p>
      } else {
        return <p style={{display : "none"}}></p>
      }
    }

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

      const {id, filter, postType, compName, compSA, compCS, compZip, 
             cNumber, cName, invwDate, pcDate, posTitle, posId, posUrl, 
             salary, posDead, date} = this.props.p;

      const pStyle = { textAlign : "center"};

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


	    return (
        <div>
	      <li className={ filter ? "nopost" : "post"} style={this.listStyle()}>
          <button onClick={this.props.deletePost.bind(this, id)} style={btn1Style}>X</button>
          <button onClick={this.props.filterPost.bind(this, postType)} style={btn2Style}>F</button>
		      <details>
			      	<summary>{compName}</summary>
              {this.streetAddress(compSA, pStyle)}
              {this.cityState(compCS, pStyle)}
              {this.zipcode(compZip, pStyle)}
              {this.contactName(cNumber, pStyle)}
              {this.contactNumber(cName, pStyle)}
              {this.interviewDate(invwDate, pStyle)}
              {this.phoneCallDate(pcDate, pStyle)}
		      </details>
		      <details>
			      	<summary>{posTitle}</summary>
              {this.positionId(posId, pStyle)}
              {this.positionUrl(posUrl, pStyle)}
              {this.positionSalary(salary, pStyle)}
              {this.positionDeadline(posDead, pStyle)}
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
            compSA   : "123 Main St.",
            compCS   : "Dallas, Texas",
            compZip  : 75229,
            cNumber  : "480-294-0824",
            cName    : "Melissa Stines",
            invwDate : "12/12/2019",
            pcDate   : "01/13/2020",
            posTitle : "Position Title Here",
            posId    : "#2346A876",
            posUrl   : "google.com",
            salary   : "$100k",
            posDead  : Date("12/14/2015"),
            date     : Date()
        },{
            id       : 1,
            filter   : false,
            postType : "applied",
            compName : "Company Name Here",
            compSA   : "123 Main St.",
            compCS   : "Dallas, Texas",
            compZip  : 75229,
            cNumber  : "480-294-0824",
            cName    : "Melissa Stines",
            invwDate : "12/12/2019",
            pcDate   : "01/13/2020",
            posTitle : "Position Title Here",
            posId    : "#2346A876",
            posUrl   : "google.com",
            salary   : "$100k",
            posDead  : Date("12/14/2015"),
            date     : Date()
        },{
            id       : 2,
            filter   : false,
            postType : "contacted",
            compName : "Company Name Here",
            compSA   : "123 Main St.",
            compCS   : "Dallas, Texas",
            compZip  : 75229,
            cNumber  : "480-294-0824",
            cName    : "Melissa Stines",
            invwDate : "12/12/2019",
            pcDate   : "01/13/2020",
            posTitle : "Position Title Here",
            posId    : "#2346A876",
            posUrl   : "google.com",
            salary   : "$100k",
            posDead  : Date("12/14/2015"),
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


  addPost = (post) => {
    const newPost = {
      id: Date(), 
      filter: false,
      postType: "ideas",
      compName: post.company,
      posTitle: post.position,
      date: Date()
    }
    this.setState({
      postList: [...this.state.postList, newPost ]
    })
    console.log(newPost);
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
