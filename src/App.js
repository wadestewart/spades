import React, { useEffect, useState } from 'react'
import socket from './helpers/socket'

import NameChoice from './name-choice/NameChoice'
import Game from './game/Game'
import './App.css'

/**
 * @summary entry method to run the program
 */
function App() {
  // check state of game is sessionStorage for reloads
  const reloadGameStarted = sessionStorage.getItem('hasGameStarted')
  // local state hooks
  const [player, setPlayer] = useState({})
  const [players, setPlayers] = useState([])
  const [name, setName] = useState("")
  const [team, setTeam] = useState("")
  // local state to show/hide lounge/gameBoard when the user clicks the start button
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [hasGameStartedServer, setServerGameStartedServer] = useState(false)

  // effect hooks to build the player
  useEffect(() => {
    const builtPlayer = {
      name: name,
      team: {
        name: team,
        bid: 0,
        books: 0,
        score: 0
      }
    }
    setPlayer(builtPlayer);
  }, [name, team])

  // STOPPED HERE: INFINITE LOOP WHEN STARTING GAME
  // alert the server the game has started
  useEffect(() => {
    socket.connect()

    if (hasGameStarted) {
      socket.emit('hasGameStarted', hasGameStarted)
      socket.on('hasGameStartedServer', hasGameStartedServer => {
        console.log(hasGameStartedServer)
        setServerGameStartedServer(hasGameStartedServer)
        
      })

      return () => {
        socket.off('hasGameStarted');
      }
    }
  }, [hasGameStarted])

  // show the Game component on reload, if game has started
  useEffect(() => {
    setHasGameStarted(reloadGameStarted)
  }, [reloadGameStarted])

  // function to handle the user's input and set it as the name
  //  will be passed in as a click handler
  const handleNameChoice = (e, name) => {
    e.preventDefault()
    setName(name)
    console.log('commented back in when ready to set sessionStorage, username')
    // sessionStorage.setItem('username', name)
  }

  // function to set the player's team based on the user's selection
  //  will be passed in as a click handler
  const handleTeamChoice = (e, team) => {
    e.preventDefault()
    setTeam(team)
  }

  // function to handle setting the gameStarted value (to start the game)
  const handleGameStart = players => {
    setHasGameStarted(true)
    console.log('commented back in when ready to set sessionStorage, hasGameStarted')
    // sessionStorage.setItem('hasGameStarted', true)
    setPlayers(players)
  }

  // conditionally return the jsx with the:
  //  Name Choice component
  return (
    <div className="App">
      {hasGameStarted
        ? <Game players={players} hasGameStarted />
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
