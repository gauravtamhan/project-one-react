/**
 * Capitalize first letter of a given string
 * @param string string to be formatted
 * @returns string with first letter capital
 */
export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
