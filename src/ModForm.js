import React from 'react';
import App from './App.js';

class ModForm extends React.Component {
	constructor(props) {
		super(props);
		let posting = this.props.routeInfo.location.state.post;
		this.state = {
			id           : posting.id,
			filter       : posting.filter,
			postType     : posting.postType,
			company      : posting.compName,
			street       : posting.compSA,
			cityState    : posting.compCS,
			zipCode      : posting.compZip,
			phone        : posting.cNumber,
			contactName  : posting.cName,
			interviewDate: posting.invwDate,
			phoneCallDate: posting.pcDate,
			position     : posting.posTitle,
			website      : posting.posUrl,
			salary       : posting.salary,
			deadline     : posting.posDead,
			date         : posting.date
		}
	}

	onSubmit = (event) => {
		event.preventDefault();
		let thisPost = this.state;
		this.props.editPost(thisPost);
		this.setState({
			company: "",
			street: "",
			cityState: "",
			zipCode: "",
			phone: "",
			contactName: "",
			interviewDate: "",
			phoneCallDate: "",
			position: "",
			website: "",
			salary: "",
			deadline: ""
		});
		this.props.routeInfo.history.push("/");
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

    // date is expected in the following format: 'Thu, 01 Jan 1970 00:00:00'
    render() {
    	return (
    		<div className="ModForm">
    		<form onSubmit={this.onSubmit} action="/">
    		<input type="text" name="company" placeholder="Company Name" value={this.state.company} onChange={this.onChange} required/>
    		<br/>
    		<input type="text" name="street" placeholder="Street Address" value={this.state.street} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="cityState" placeholder="City,State" value={this.state.cityState} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="zipCode" placeholder="Zip Code" value={this.state.zipCode} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.onChange} required/>
    		<br/>
    		<input type="text" name="contactName" placeholder="Contact Name" value={this.state.contactName} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="interviewDate" placeholder="Interview Date" value={this.state.interviewDate} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="phoneCallDate" placeholder="Phone Call Date" value={this.state.phoneCallDate} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="position" placeholder="Desired Position" value={this.state.position} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="website" placeholder="Website URL" value={this.state.website} onChange={this.onChange} required/>
    		<br/>
    		<input type="text" name="salary" placeholder="Salary" value={this.state.salary} onChange={this.onChange} />
    		<br/>
    		<input type="text" name="deadline" placeholder="Deadline" value={this.state.deadline} onChange={this.onChange} />
    		<br/>
    		<input type="submit" className="submit-btn" value="Submit"/>
    		</form>
    		</div>
    		);
    }
}


export default ModForm;
