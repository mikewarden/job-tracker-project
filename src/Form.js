import React from 'react';
import App from './App.js';
import './App.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			company: "",
			position: "",
			phone: "",
			url: ""
		}
	}

	handleChange = (event) => {
		this.props.onSubmit({[event.target.name]: event.target.value})
		this.setState({[event.target.name]: event.target.value});
	}

	onSubmit = (event) => {
		event.preventDefault();
		// this.props.onSubmit(this.state);
		this.setState({
			company: "",
			position: "",
			phone: "",
			url: ""
		});
		// this.props.onChange({
		// 	company: "",
		// 	position: "",
		// 	phone: "",
		// 	url: ""
		// })
	}

  render() {
    return (
      <div className="Form">
        
        <form>
        	<input type="text"
        	name="company" 
        	placeholder="Company Name"
        	value={this.state.company} 
        	onChange={event => this.handleChange(event)} />
        	<br/>
        	<input type="text"
        	name="position"
        	placeholder="Desired Position"
        	value={this.state.position} 
        	onChange={event => this.handleChange(event)} />
        	<br/>
        	<input type="text" 
        	name="phone"
        	placeholder="Phone Number"
        	value={this.state.phone} 
        	onChange={event => this.handleChange(event)} />
        	<br/>
        	<input type="text" 
        	name="url"
        	placeholder="Website URL"
        	value={this.state.url} 
        	onChange={event => this.handleChange(event)} />
        	<br/>
        	<button onClick={(event) => this.onSubmit(event)}>Submit</button>

        	
        </form>
      </div>
    );
  }
}

export default Form;
