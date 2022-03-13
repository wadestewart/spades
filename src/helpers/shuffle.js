// shuffle the deck of cards
//  from this SO https://stackoverflow.com/a/2450976
export const shuffle = array => {
    // setting current index to array length
    //  so we start at the end
    let currentIndex = array.length, randomIndex;

    // while there are elements to shuffle
    while (currentIndex !== 0) {

        // pick an index that remains
        randomIndex = Math.floor(Math.random() * currentIndex);
        // decrement from the end of the array
        currentIndex --;

        // and swap out with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    // returned the shuffled array
    return array;
}
