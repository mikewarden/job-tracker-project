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
  render() {
    return (
      <div className="Form">
        <h1>JobTracker</h1>
        <form>
        	<input type="text" 
        	placeholder="Company Name"
        	value={this.state.company} 
        	onChange={(event) => event.target.value} />

        	<input type="text" 
        	placeholder="Desired Position"
        	value={this.state.position} 
        	onChange={(event) => event.target.value} />

        	<input type="text" 
        	placeholder="Phone Number"
        	value={this.state.phone} 
        	onChange={(event) => event.target.value} />

        	<input type="text" 
        	placeholder="Website URL"
        	value={this.state.url} 
        	onChange={(event) => event.target.value} />

        	
        </form>
      </div>
    );
  }
}

export default Form;
