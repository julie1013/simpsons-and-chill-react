import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let query = event.target.children[0].value;
    this.props.searchFunc(query);
  }

  render(){
    return(
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text">
          </input>
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
