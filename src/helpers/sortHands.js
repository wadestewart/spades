/**
 * @summary This helper method sorts each hand in the hands array
 */
export const sortHands = hands => {
    // initialize empty array to hold sorted hands
    const result = [];
    // iterate over the unsorted hands and sort by 1. suit and 2. rank
    hands.forEach(hand => {
        hand.sort((a,b) => 
            // ternary to check if first card is less than second
            a.props.suit.localeCompare(b.props.suit) ||
                // nested ternary to check if first card is higher than second
                b.props.rank - a.props.rank
        )
        result.push(hand);
    });

    // return the sorted hands array
    return result;
};
