import Player from "../player/Player";

/**
 * @summary This helper method will build the players from:
 *     1. The user's name and team selections
 *     2. The hand of shuffled cards passed in
 */
export const buildGamePlayers = (players, hands) => {
    // start the key at -1 because we're going to use it to assign
    //  the player's hand from the hands array by index
    let key = -1;
    // iterate over the players and assign the props
    const gamePlayers = players.map(player => {
        key++;
        return(
            <Player
                key={key}
                hand={hands[key]}
                id={key}
                player={player}
            />
        )
    });

    return gamePlayers;
};
