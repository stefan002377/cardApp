/**
 * Create debounce for scroll event
 * @constant
 * @type {function}
 * @param {function} fn 
 * @param {number} ms
 * @return {callback}
 */

export const debounce  = function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}
