import React from 'react';
import './App.css';
import axios from "axios";
import { Players } from "./components/Players";

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

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>Players</h1>
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

export default App;

