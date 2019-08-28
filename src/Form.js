import React from 'react';
import App from './App.js';
import './App.css';

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <h1>JobTracker</h1>
        <form>
        	<input type="text"></input>
        </form>
      </div>
    );
  }
}

export default Form;
