import React, { useEffect, useState } from 'react';
import './App.css';
// import Game from './game/Game';
import NameChoice from './name-choice/NameChoice';

/**
 * @summary entry method to run the program
 */
function App() {
  // local state hook
  const [player, setPlayer] = useState({});
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  // effect hooks to build the player
  useEffect(() => {
    const builtPlayer = {
      name: name,
      team: team
    };
    setPlayer(builtPlayer);
  }, [name, team]);

  // function to handle the user's input and set it as the name 
  const handleNameChoice = (e, name) => {
    e.preventDefault();
    setName(name);
  }

  // click handler to set the player's team based on the user's selection 
  const handleTeamChoice = (e, team) => {
    e.preventDefault();
    setTeam(team);
  }
  return (
    <div className="App">
      <NameChoice
        handleNameChoice={handleNameChoice}
        handleTeamChoice={handleTeamChoice}
        player={player}
      />
      {/* <Game /> */}
    </div>
  );
}

export default App;
