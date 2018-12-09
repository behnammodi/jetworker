"use strict";

exports.__esModule = true;

/**
 * Service in WebWorker 
 * @returns {undefined} nothing
 */
exports.default = function Service() {
  var repository = {};
  var funcs = {};
  /**
   * initial listener
   * @param {string} name
   * @param {function} callback
   */
  this.on = function (name, callback) {
    funcs[name] = callback;
    self.onmessage = function (event) {
      var req = JSON.parse(event.data);
      repository[req.id] = req;
      funcs[req.name](
        req.data,
        function (data) {
          self.postMessage(JSON.stringify({
            id: req.id,
            data,
          }))
          delete repository[req.id];
        },
      )
    };
  }
};