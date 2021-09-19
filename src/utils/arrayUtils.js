/**
 * Shuffles items in an array base on Fisher-Yates (aka Knuth) Shuffle algorithm
 * @param array array of items to shuffle
 * @returns same array but shuffled
 */
export const shuffle = (array) => {
  const newArray = [...array]
  let currentIndex = newArray.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ]
  }

  return newArray
}
