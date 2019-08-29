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
		
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

  render() {
    return (
      <div className="Form">
        
        <form onSubmit={this.onSubmit}>
        	<input type="text" name="company" placeholder="Company Name" value={this.state.company} onChange={this.onChange}/>
        	<br/>
        	<input type="text" name="position" placeholder="Desired Position" onChange={this.onChange} />
        	<br/>
        	<input type="submit" value="Submit" className="submit-btn" value={this.state.position}/>

        	
        </form>
      </div>
    );
  }
}

export default Form;
