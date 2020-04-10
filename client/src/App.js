import React from 'react';
import './App.css';
import axios from "axios";
import { Players } from "./components/Players";
import { SearchForm } from "./components/SearchForm";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
        console.log(res);
        this.setState({players: res.data});
      })
      .catch(err => console.error(err));
  }

  handleSearch = input => {
    this.setState({
      players: this.state.players.filter(player => {
        return player.name.toUpperCase().includes(input);
      })
    });
  };


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>Players</h1>
        <SearchForm handleSearch={this.handleSearch} />
        {this.state.players.map(player => <li key={player.id}>
          
         
        <h2>Name: {player.name}</h2>
        <h3>Country: {player.country}</h3>
        <h4>Searchs: {player.searches}</h4>
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

