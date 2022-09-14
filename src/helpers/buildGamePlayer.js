import Player from "../player/Player";

/**
 * @summary This helper method will build the players from:
 *     1. The user's name and team selections
 *     2. The hand of shuffled cards passed in
 */
export const buildGamePlayers = (players, hands) => {
    // start the key at -1 because we're going to use it to assign
    //  the player's hand from the hands array by index
    let key = -1
    // iterate over the players and assign the props
    const gamePlayers = players.map(player => {
        key++

        // handle the first pass building the player with a hand
        if (hands) {
            // add the hand to the player object to pass to the socket
            player.hand = hands[key]
            return(
                <Player
                    key={key}
                    hand={hands[key]}
                    id={key}
                    player={player}
                    privatePlayer
                />
            )
        }

        // here we'll build the player from the args
        return(
            <Player
                key={key}
                hand={player.hand}
                id={key}
                player={player}
                privatePlayer
            />
        )
    });

    return gamePlayers
}

/**
 * @summary This helper method will build the players from:
 *     1. The user's name and team selections
 *     2. The hand of shuffled cards passed in
 */
 export const buildPlayersWithHands = (players, hands) => {
    // start the key at -1 because we're going to use it to assign
    //  the player's hand from the hands array by index
    let key = -1
    // iterate over the players and assign the props
    const gamePlayers = players.map(player => {
        key++
        player.hand = hands[key]
        return player
    })

    return gamePlayers
}


export const renderGame = (players, hands) => {
    const gamePlayers = buildGamePlayers(players, hands)

    console.log('in the game!')

    return gamePlayers
}
