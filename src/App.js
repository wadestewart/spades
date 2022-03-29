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
  // effect hooks to build the player and 
  useEffect(() => {
    const builtPlayer = {
      name: name,
    };
    setPlayer(builtPlayer);
  }, [name]);

  // handle submit function
  const handleSignInSubmit = (e, name) => {
    e.preventDefault();
    setName(name);
  }
  return (
    <div className="App">
      <NameChoice handleSubmit={handleSignInSubmit} player={player} />
      {/* <Game /> */}
    </div>
  );
}

export default App;
