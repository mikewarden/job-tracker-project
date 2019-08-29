import React from 'react';
import App from './App.js';
import './App.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			company: "",
			position: ""
		}
	}


	onSubmit = (event) => {
		event.preventDefault();
		this.props.addPost(this.state.position, this.state.companyd);
	    
		this.setState({
			company: "",
			position: ""
		})
	}


	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value

		});
		console.log(event.target.name);
	}

  render() {
    return (
      <div className="Form">
        
        <form onSubmit={this.onSubmit}>
        	<input type="text" name="company" placeholder="Company Name" value={this.state.company} onChange={this.onChange}/>
        	<br/>
        	<input type="text" name="position" placeholder="Desired Position" value={this.state.position} onChange={this.onChange} />
        	<br/>
        	<input type="submit" className="submit-btn" value="Submit"/>

        	
        </form>
      </div>
    );
  }
}

export default Form;
