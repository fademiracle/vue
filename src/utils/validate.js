/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin','user'];
  //身份验证，去掉str的头尾空白，看valid_map中是否包含改str,无返回-1
  return valid_map.indexOf(str.trim()) >= 0
}
