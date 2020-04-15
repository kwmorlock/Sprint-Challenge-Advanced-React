import React from 'react';
import './App.css';
import axios from "axios";
// import { Players } from "./components/Players";
import { SearchForm } from "./components/SearchForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        // console.log(res);
        this.setState({players: res.data});
      })
      .catch(err => console.error(err));
  }

  handleSearch = input => {
    this.setState({
      players: this.state.players.filter(player => {
        return player.name.toLowerCase().includes(input);
      })
    });
  };


  render() {
    // console.log(this.state.data);
    return (
      <div className="App" data-testid="app" id="app">
        <h1 data-testid="players" id="players" >Players</h1>
        <SearchForm handleSearch={this.handleSearch} />
        {this.state.players.map(player => <li key={player.id}>
          
         
        <h2 data-testid="name" id="name" >Name: {player.name}</h2>
        <h3>Country: {player.country}</h3>
        <h4>Searches: {player.searches}</h4>
        <h5>Id: {player.id}</h5>
        </li>
        )}
      </div>
    );
  }
}

// render() {
//   // console.log(this.state.data);
//   return (
//     <div className="App">
//       <h1>Sprint Review</h1>
//       <SearchForm handleSearch={this.handleSearch} />
//       {this.state.players.map(player => {
//         return <Players players={player} />;
//       })}
//     </div>
//   );
// }
// }


export default App;

