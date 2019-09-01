import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Form from './Form.js';
import ModForm from './ModForm.js';
import './App.css';
import edit from './pencil2.svg';
import lightbulbIcon from './lightbulb3.svg';
import phoneIcon from './phone4.svg';
import starIcon from './checkmark.svg';

class Post extends React.Component {


  address = (addr, cityState, zip) => {
    let csString = cityState ? ", " + cityState : '';
    let zipcode = zip ? "  " + zip : '';
    if (addr || cityState || zip) {
      return <address>{addr + csString + zipcode}</address>
    } else {
      return
    }
  }


  contact = (name, num) => {
    if (name) {
      return <address>{name + " : " } <a href={"skype:" + num}>{num}</a></address>
    } else {
      return <address><a href={"skype:" + num}>{num}</a></address>
    }
  }


  interviewDate = (interViewDate, interViewTime, pStyle) => {
    if (interViewDate !== "Invalid Date") {
      return <p style={pStyle}>Interview Date: {interViewDate + " " + interViewTime}</p>
    } else {
      return
    }
  }

  phoneCallDate = (callD, pStyle) => {
    if (callD !== "Invalid Date") {
      return <p style={pStyle}>Contacted: {callD}</p>
    } else {
      return
    }
  }

  positionUrl = (url) => {
    if (url) {
      return <a href={"https://www." + url} target={"_blank"}>{url}</a>
    } else {
      return
    }
  }

  positionSalary = (salary, pStyle) => {
    if (salary) {
      return <p style={pStyle}>Salary: {salary}</p>
    } else {
      return
    }
  }

  positionDeadline = (deadline, pStyle) => {
    if (deadline !== "Invalid Date") {
      return <p style={pStyle}>Deadline: {deadline}</p>
    } else {
      return
    }
  }

  // dynamic style!
  listStyle = () => {
    if (this.props.p.postType === "ideas") {
      return { backgroundColor : "#FEF9C7", color: "#000" };

    } else if (this.props.p.postType === "applied") {
      return { backgroundColor : "#9FEDD7", color: "#000"  };

    } else if (this.props.p.postType === "contacted")
      return { backgroundColor : "#FCE181", color: "#000"  };
    }

  getIcon = (iconType) => {
    if (iconType === "ideas") {
      return lightbulbIcon;

    } else if (iconType === "applied") {
      return starIcon;

    } else if (iconType === "contacted") {
      return phoneIcon;
    }
  };
  
  getDateDifference = (date) => {
    let now = Date.now();
    let diff = Math.floor((now - date) / (1000*60*60*24));  // ms - sec - min - hours - days
    if (diff.isNaN) {
      return "unknown date";
    } else {
      return (`${diff} days ago`); 
    }
  }

  getTimeString = (date) => {
    let hh = date.getHours();
    let mm = date.getMinutes();
    let regex = new RegExp("[A-Z](?!.*[(])",'g');
    let tz = date.toTimeString().match(regex).join('');

    let tod = "AM";
    if (hh > 12) { 
      hh = hh - 12;
      tod = "PM";
    }
    return (`${hh}:${mm} ${tod} (${tz})`);
  }
    



  render() { 

    const {id, filter, postType, btn1Type, btn2Type, compName, compSA, compCS, compZip, 
     cNumber, cName, invwDate, pcDate, posTitle, posUrl, 
     salary, posDead, date} = this.props.p;

     let iDate = new Date(invwDate);
     let pDate = new Date(pcDate);
     let dDate = new Date(posDead);
     let aDate = new Date(date);

     const pStyle = { margin: "0px", outline: "none", marginBlockStart: 0, marginBlockEnd: 0};

     
     const btn1Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      color : "#000",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "right",
      padding: "8px 10px",
      marginTop: "7px",
      marginRight: "7px"
    };

    const btn2Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "left",
      padding: "4px 5px"
    };

    const btn3Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "left",
      padding: "4px 5px",
      marginLeft: "20px",
      marginRight: "5px"
    };

    const btn4Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "right",
      padding : "4px 5px",
      marginTop: "60px",
      marginLeft: "3px",
      marginRight: "2px"
    };

      
      let route = this.props.routeInfo;


	    return (
        <div>
	      <li className={ filter ? "nopost" : "post"} style={this.listStyle()}>
          <button onClick={this.props.modifyPost.bind(this, this.props.p, route)} style={btn3Style}><img src={edit} alt={"Modify Post"} style={{width: "25px", height: "25px"}} title={"Modify Post"}/></button>
          <button onClick={this.props.deletePost.bind(this, id)} style={btn1Style} title={"Delete Post"}>X</button>
          <button onClick={this.props.filterPost.bind(this, postType)} style={btn2Style}  title={"Filter Post by Type"}><img className="filterBtn" src={this.getIcon(postType)} alt={"Filter Button"} style={{width: "25px", height: "25px"}}/></button>
          <button onClick={this.props.switchPostType.bind(this, btn1Type, this.props.p)} style={btn4Style} title={"Change Post Type"} ><img src={this.getIcon(btn1Type)} alt={"Move Button"} style={{width: "25px", height: "25px"}}/></button>
          <button onClick={this.props.switchPostType.bind(this, btn2Type, this.props.p)} style={btn4Style}  title={"Change Post Type"} ><img src={this.getIcon(btn2Type)} alt={"Move Button"} style={{width: "25px", height: "25px"}}/></button>
             
         
          <details>
          <summary style={{outline: "none"}}>{compName}</summary>
          {this.address(compSA, compCS, compZip)}
          {this.contact(cName, cNumber)}
          {this.interviewDate(iDate.toDateString(), this.getTimeString(iDate), pStyle)}
          {this.phoneCallDate(pDate.toDateString(), pStyle)}
          </details>
  
          <details>
          <summary style={{outline: "none"}}>{posTitle}</summary>
          {this.positionUrl(posUrl)}
          {this.positionSalary(salary, pStyle)}
          {this.positionDeadline(dDate.toDateString(), pStyle)}
          </details>
          <p>{this.getDateDifference(aDate)}</p>
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
                                     modifyPost={this.props.modifyPost}
                                     switchPostType={this.props.switchPostType}
                                     routeInfo={this.props.routeInfo}/>
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

    // getting data out of localStorage for display
    let size = JSON.parse(localStorage.getItem("listSize"));

    let postList = [];
    if (size > 0) {
      for (let i=0; i<size; i++) {
        postList.push(JSON.parse(localStorage.getItem(`post${i}`)));
      }
      this.state = { postList };
      console.log("USING LOCAL STORAGE");

    } else {

    //date is expected in the following format: 'Thu, 01 Jan 1970 00:00:00'
    this.state = {
      postList : [{
        id       : Date.parse('Aug 18, 2019 13:15:30'),
        filter   : false,
        postType : "ideas",
        btn1Type : "applied",
        btn2Type : "contacted",
        compName : "Company Name Here",
        compSA   : "123 Main St.",
        compCS   : "Dallas, Texas",
        compZip  : 75229,
        cNumber  : "480-294-0824",
        cName    : "Melissa Stines",
        invwDate : "12/12/2019 23:15:30",
        pcDate   : "01/13/2020",
        posTitle : "Position Title Here",
        posUrl   : "google.com",
        salary   : "$100k",
        posDead  : 'Jan 31, 2020 23:15:30',
        date     : Date.parse('Aug 18, 2019 13:15:30')
      },{
        id       : Date.parse('May 23, 2019 13:15:30'),
        filter   : false,
        postType : "applied",
        btn1Type : "contacted",
        btn2Type : "ideas",
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
        posDead  : 'Dec 19, 2019 23:15:30',
        date     : Date.parse('May 23, 2019 13:15:30')
      },{
        id       : Date.parse('Jan 23, 2018 13:15:30'),
        filter   : false,
        postType : "contacted",
        btn1Type : "ideas",
        btn2Type : "applied",
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
        posDead  : 'May 1, 2020 23:15:30',
        date     : Date.parse('Jan 23, 2018 13:15:30')
      }
      ]

    }
    console.log("NOT USING LOCAL STORAGE");
  }
}


  deletePost = (id) => {
    this.setState({
      postList : [...this.state.postList.filter(item => item.id !== id )]
    });
  }


  addPost = (post) => {
    let now = Date.now();
    const newPost = {
      id: now, 
      filter: false,
      postType: "ideas",
      btn1Type : "applied",
      btn2Type : "contacted",
      compName: post.company,
      compSA: post.street,
      compCS: post.cityState,
      compZip: post.zipCode,
      cNumber: post.phone,
      cName: post.contactName,
      invwDate: post.interviewDate,
      pcDate:  post.phoneCallDate,
      posTitle: post.position,
      posUrl: post.website,
      salary: post.salary,
      posDead: post.deadline,
      date: now
    }
    this.setState({
      postList: [...this.state.postList, newPost ]
    })
  }

  editPost = (post) => {
    let previousItem = this.state.postList.find(item => item.id === post.id);
    let index = this.state.postList.indexOf(previousItem);

    let modifiedItem = {
      id:       post.id,
      filter:   post.filter,
      postType: post.postType,
      btn1Type: post.btn1Type,
      btn2Type: post.btn2Type,
      compName: post.company,
      compSA:   post.street,
      compCS:   post.cityState,
      compZip:  post.zipCode,
      cNumber:  post.phone,
      cName:    post.contactName,
      invwDate: post.interviewDate,
      pcDate:   post.phoneCallDate,
      posTitle: post.position,
      posUrl:   post.website,
      salary:   post.salary,
      posDead:  post.deadline,
      date:     post.date
    }; 

    // the splice method returns the deleted item so only that item is rendered. The second
    // setState rectifies this problem.
    this.setState({ postList : [...this.state.postList.splice(index, 1, modifiedItem )] });
    this.setState({ postList : [...this.state.postList] });
  }


  //If the postType is set to "ideas" it logs to the console...

  switchPostType = (type, post) => {
    let itemToMove = this.state.postList.find(item => item.id === post.id);
    let index = this.state.postList.indexOf(itemToMove);
    let temp = itemToMove.postType;
    if (itemToMove.btn1Type === type) {
      itemToMove.postType = itemToMove.btn1Type;
      itemToMove.btn1Type = temp;
    } else {
      itemToMove.postType = itemToMove.btn2Type;
      itemToMove.btn2Type = temp; 
    }

    // the splice does not change the whole list so only one item is rendered. The second
    // setState rectifies this problem.
    this.setState({ postList : [...this.state.postList.splice(index, 1, itemToMove )] });
    this.setState({ postList : [...this.state.postList] });
  }

  modifyPost = (item, route) => {
    route.history.push({pathname: "/reform", state: {post : item}});
  }


  filterPost = (type) => {
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


  tSort = false;
  typeSort = () => {
    this.tSort = !this.tSort;
    this.setState({
      postList : [...this.state.postList].sort( (a, b) => {
        let first = a;
        let second = b;

        if (!this.tSort) {
          first = b;
          second = a;
        }
        if (first.postType < second.postType) {
          return -1;
        }
        if (first.postType > second.postType) {
          return 1;
        }
        return 0;
      })
    })

  }


  dSort = false;
  dateSort = () => {
    this.dSort = !this.dSort;
    this.setState({
      postList : [...this.state.postList].sort( (a, b) => {
        let first = a;
        let second = b;

        if (!this.dSort) {
            first = b;
            second = a;
        }
        return (first.date - second.date)
      })
    })

  }

  render() {

    // storing the list in localStorage when it changes
    let list = this.state.postList.map(item => {
      return JSON.stringify(item);
    });
    localStorage.setItem("listSize", JSON.stringify(this.state.postList.length));

    list.forEach(( item, index) => {
      localStorage.setItem(`post${index}`, item);
    });
    
    // setting some style variables
    const linkStyle = {
      margin : "0 2% 0 2%",
      textDecoration: "none",
      color: "#fff",
      display: "inline-flex",
      textAlign: "center"
    };

    const headerStyle = {
      marginBlockStart : ".2em",
      marginBlockEnd : ".2em",
    };

    return (
      <Router>
      <div className="JobTracker">
      <header>
      <h1 style={headerStyle}>Job Tracker</h1>
      <Link style={linkStyle} to="/">Home</Link>  
      <Link style={linkStyle} to="/form">Add Posting</Link>
      <button onClick={()=>this.dateSort()}>Sort by Date</button>
      <button onClick={()=>this.typeSort()}>Sort by Category</button>
      </header>
      <Route exact path="/" render={ props => (
        <React.Fragment>
        <ul className="Postings">
        <Postings posts={this.state.postList} deletePost={this.deletePost}
                                              filterPost={this.filterPost}
                                              modifyPost={this.modifyPost}
                                              switchPostType={this.switchPostType}
                                              routeInfo={props}/>
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
