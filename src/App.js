import React, { Component } from "react";
import SearchBox from "./SearchBox";
import SearchList from "./SearchList";
import FactButton from "./FactButton";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      phrase: "",
      searchfield: "",
      searchlist: [],
    };
  }

  randomFact = () => {
    this.setState({searchfield: '1'});
    this.setState({ searchlist: [] });
    this.setState({ phrase: '' });
    fetch("https://api.chucknorris.io/jokes/random")
    .then((resp) => resp.json())
    .then((resp) => {
      this.setState({ phrase: resp.value });
      this.setState({searchfield: ''});
    })
  };

  onSearchChange = (event) => {
    const value = event.target.value;
    if (value.length > 2) {
      fetch(
        `https://api.chucknorris.io/jokes/search?query=${value}`
        )
      .then((resp) => resp.json())
      .then((resp) => this.setState({ searchlist: resp.result }));
    } else {
      this.setState({ searchlist: [] });
      this.setState({ phrase: '' });
    }
    this.setState({searchfield: value});
  };

  render() {
    return (
      <div>
      <div className="header">
      <h1>Chuck Norris Facts!</h1>
      <FactButton click={this.randomFact} />
      <SearchBox searchChange={this.onSearchChange} />
      </div>
      <div className="scroll" >
      <SearchList list={this.state.searchlist} phrase={this.state.phrase}  searchfield={this.state.searchfield} />
      </div>
      </div>
      );
  }
}

export default App;
