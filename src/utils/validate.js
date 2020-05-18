/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin','user'];
  return valid_map.indexOf(str.trim()) >= 0
}
