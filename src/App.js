import React, { useEffect, useState } from 'react';
import NameChoice from './name-choice/NameChoice';
import Game from './game/Game';
import './App.css';

/**
 * @summary entry method to run the program
 */
function App() {
  // local state hooks
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  // local state to show/hide lounge/gameBoard when the user clicks the start button
  const [gameStarted, setGameStarted] = useState(false);

  // effect hooks to build the player
  useEffect(() => {
    const builtPlayer = {
      name: name,
      team: team
    };
    setPlayer(builtPlayer);
  }, [name, team]);

  // function to handle the user's input and set it as the name
  //  will be passed in as a click handler
  const handleNameChoice = (e, name) => {
    e.preventDefault();
    setName(name);
  }

  // function to set the player's team based on the user's selection
  //  will be passed in as a click handler
  const handleTeamChoice = (e, team) => {
    e.preventDefault();
    setTeam(team);
  }

  // function to handle setting the gameStarted value (to start the game)
  const handleGameStart = players => {
    setGameStarted(true);
    setPlayers(players);
  }

  // return the jsx with the Name Choice component
  return (
    <div className="App">
      {gameStarted
        ? <Game players={players} />
        : <NameChoice
            handleNameChoice={handleNameChoice}
            handleTeamChoice={handleTeamChoice}
            handleGameStart={handleGameStart}
            player={player}
          />
      }
    </div>
  );
}

export default App;
