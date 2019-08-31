import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import SwitchTypes from './SwitchTypes.js';
import Form from './Form.js';
import ModForm from './ModForm.js';
import './App.css';
import edit from './edit-icon.svg';
import lightbulbIcon from './lightbulb1.svg';
import phoneIcon from './phone1.svg';
import starIcon from './star1.svg';

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
      return { backgroundColor : "#EB1200" };

    } else if (this.props.p.postType === "applied") {
      return { backgroundColor : "#0CAFE8" };

    } else if (this.props.p.postType === "contacted")
    return { backgroundColor : "#0BFF0A" };
  };

  filterIcon = () => {
    if (this.props.p.postType === "ideas") {
      return lightbulbIcon;

    } else if (this.props.p.postType === "applied") {
      return phoneIcon;

    } else if (this.props.p.postType === "contacted") {
      return starIcon;
    }
  };

  altIcon1 = () => {

    if (this.props.p.postType === "ideas") {
      return phoneIcon;
    } 
    if (this.props.p.postType === "applied") {
      return starIcon;
    } 
    if (this.props.p.postType === "contacted") {
      return lightbulbIcon;
    }   
  }

  altIcon2 = () => {

    if (this.props.p.postType === "ideas") {
      return starIcon;
    } 
    if (this.props.p.postType === "applied") {
      return lightbulbIcon;
    } 
    if (this.props.p.postType === "contacted") {
      return phoneIcon;
    }   
  }
  

  
  getDateString = (date) => {
    let now = Date.now();
    let diff = Math.floor((now - date) / (1000*60*60*24));  // ms - sec - min - hours - days
    if (diff.isNaN) {
      return "unknown date";
    } else {
      return (`${diff} days ago`); 
    }
    
  }




  




  render() { 

    const {id, filter, postType, compName, compSA, compCS, compZip, 
     cNumber, cName, invwDate, pcDate, posTitle, posUrl, 
     salary, posDead, date} = this.props.p;

     const pStyle = { textAlign : "center", margin: "0px"};





     const btn1Style = {
      background : "black",
      color : "white",
      padding : "5px",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "right",
      padding: "8px 10px"
    };

    const btn2Style = {
      background : "black",
      color : "white",
      padding : "5px",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "left",
      padding: "8px 10px"
    };

    const btn3Style = {
      background : "black",
      color : "white",
      padding : "5px",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "left",
      padding: "8px 10px"
    };

    const btn4Style = {
      background : "black",
      color : "white",
      padding : "5px",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "right",
      padding : "8px 10px",
      marginTop: "80px"


    }

    




    let route = this.props.routeInfo;


    return (
      <div>
      <li className={ filter ? "nopost" : "post"} style={this.listStyle()}>
      <button onClick={this.props.modifyPost.bind(this, this.props.p, route)} style={btn3Style}><img src={edit} style={{width: "15px", height: "15px", backgroundColor: "#fff"}}/></button>
      <button onClick={this.props.deletePost.bind(this, id)} style={btn1Style}>X</button>
      <button onClick={this.props.filterPost.bind(this, postType)} style={btn2Style}><img className="filterBtn" src={this.filterIcon()} style={{width: "15px", height: "15px", backgroundColor: "#fff"}}/></button>
      <button style={btn4Style}><img src={this.altIcon1()} style={{width: "15px", height: "15px", backgroundColor: "#fff"}}/></button>
      <button style={btn4Style}><img src={this.altIcon2()} style={{width: "15px", height: "15px", backgroundColor: "#fff"}}/></button>



      <details>
      <summary>{compName}</summary>
      {this.streetAddress(compSA, pStyle)}
      {this.cityState(compCS, pStyle)}
      {this.zipcode(compZip, pStyle)}
      {this.contactName(cName, pStyle)}
      {this.contactNumber(cNumber, pStyle)}
      {this.interviewDate(invwDate, pStyle)}
      {this.phoneCallDate(pcDate, pStyle)}
      </details>
      <hr width="10%"/>
      <details>
      <summary>{posTitle}</summary>
      {this.positionUrl(posUrl, pStyle)}
      {this.positionSalary(salary, pStyle)}
      {this.positionDeadline(posDead, pStyle)}
      </details>
      <p>{this.getDateString(date)}</p>
      </li>
      </div>
      );
  }
}


class Postings extends React.Component {

  render() {
   return ( 
    this.props.posts.map( item => (

     <Post key={item.id} p={item} deletePost={this.props.deletePost} 
     filterPost={this.props.filterPost} 
     modifyPost={this.props.modifyPost} routeInfo={this.props.routeInfo}/>

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

    // date is expected in the following format: 'Thu, 01 Jan 1970 00:00:00'
    this.state = {
      postList : [{
        id       : new Date(),
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
        posUrl   : "google.com",
        salary   : "$100k",
        posDead  : Date.parse('Jan 31, 2020 23:15:30'),
        date     : Date.parse('Aug 18, 2019 13:15:30')
      },{
        id       : new Date() + 1,
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
        posUrl   : "google.com",
        salary   : "$100k",
        posDead  : Date.parse('Dec 19, 2019 23:15:30'),
        date     : Date.parse('Aug 23, 2019 13:15:30')
      },{
        id       : new Date() + 2,
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
        posUrl   : "google.com",
        salary   : "$100k",
        posDead  : Date.parse('May 1, 2020 23:15:30'),
        date     : Date.parse('Aug 23, 2018 13:15:30')
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
    let now = new Date();
    const newPost = {
      id: now, 
      filter: false,
      postType: "ideas",
      compName: post.company,
      compSA: post.street,
      compCS: post.cityState,
      compZip: post.zipCode,
      cNumber: post.phone,
      cName: post.contactName,
      invwDate: Date.parse(post.interviewDate),
      pcDate: Date.parse(post.phoneCallDate),
      posTitle: post.position,
      posUrl: post.website,
      salary: post.salary,
      posDead: post.deadline,
      date: now
    }
    this.setState({
      postList: [...this.state.postList, newPost ]
    })
    console.log("this is a new post: " + newPost);
  }

  editPost = (post) => {
    let previousItem = this.state.postList.find(item => item.id === post.id);
    let index = this.state.postList.indexOf(previousItem);

    let modifiedItem = {
      id:       post.id,
      filter:   post.filter,
      postType: post.postType,
      compName: post.company,
      compSA:   post.street,
      compCS:   post.cityState,
      compZip:  post.zipCode,
      cNumber:  post.phone,
      cName:    post.contactName,
      invwDate: Date.parse(post.interviewDate),
      pcDate:   Date.parse(post.phoneCallDate),
      posTitle: post.position,
      posUrl:   post.website,
      salary:   post.salary,
      posDead:  post.deadline,
      date:     post.date
    }; 

    // the splice does not change the whole list so only one item is rendered. The second
    // setState rectifies this problem.
    this.setState({ postList : [...this.state.postList.splice(index, 1, modifiedItem )] });
    this.setState({ postList : [...this.state.postList] });
  }


  modifyPost = (item, route) => {
    route.history.push({pathname: "/reform", state: {post : item}});
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

  render() {
    const linkStyle = {
      margin : "5%",
      textDecoration: "none",
      color: "#fff",
      display: "inline-flex",
      textAlign: "center"
    };

    return (
      <Router>
      <div className="JobTracker">
      <header>
      <h1>Job Tracker</h1>
      <Link style={linkStyle} to="/">Home</Link>  
      <Link style={linkStyle} to="/form">Add Posting</Link>
      </header>
      <Route exact path="/" render={ props => (
        <React.Fragment>
        <ul className="Postings">
        <Postings posts={this.state.postList} deletePost={this.deletePost}
        filterPost={this.filterPost}
        modifyPost={this.modifyPost} routeInfo={props}/>
        </ul>
        </React.Fragment>
        )} />
      <Route path="/form" render={ props => (
        <Form routeInfo={props} addPost={this.addPost} />
        )} />
      <Route path="/reform" render={ props => (
        <ModForm routeInfo={props} editPost={this.editPost} />
        )} />
      </div>
      </Router>
      );
  }
}

export default JobTracker;
