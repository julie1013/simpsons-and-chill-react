import React, { Component } from 'react';
import './Sidebar.css';
import Search from './Search/Search';
import SearchResult from './SearchResult/SearchResult';
import { mockSimpsonsBackend } from '../../mockSimpsonsBackend';

export default class Sidebar extends Component {
  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.state = {episodes: []}
  }

  handleSearch(query) {
    mockSimpsonsBackend.getEpisodes()
    .then((episodes)=>{
      let newEps = [];
      episodes.forEach((episode)=>{
        if(episode.title.includes(query)){
          newEps.push(episode);
        }
      })
      this.setState({episodes: newEps})
    })
  }

  renderResults(){
    return this.state.episodes.map((episode)=>{
      return <SearchResult
                          key={"episode " + episode.id}
                          addToWatchListFunc={this.props.addToWatchListFunc}
                          id={episode.id}
                          title={episode.title}
                          season={episode.season}
                          airdate={episode.airDate}
                          description={episode.description} />;
    })
  }

  render(){
    return(
    <div>
        <div className="sidebar">
          <Search searchFunc={this.handleSearch}/>
          { this.renderResults() }
        </div>
        <div>
          { this.props.onAddErrorFunc() }
      </div>
    </div>
    );
  }
}
