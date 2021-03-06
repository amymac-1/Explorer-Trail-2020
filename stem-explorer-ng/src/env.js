/* eslint-disable */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals (Note: root is window)
    root.env = factory();
  }
})(this, function() {
  return {
    API_ENDPOINT: 'http://localhost:5000/api',
  };
});
