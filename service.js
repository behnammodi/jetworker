"use strict";

exports.__esModule = true;

/**
 * Service in WebWorker 
 * @returns {undefined} nothing
 */
exports.default = function Service() {
  var subscribes = {};
  /**
   * initial listener
   * @param {string} name
   * @param {function} callback
   */
  this.on = function (name, callback) {
    subscribes[name] = callback;
    self.onmessage = function (event) {
      var request = JSON.parse(event.data);
      subscribes[request.name](
        request.data,
        function (data) {
          self.postMessage(JSON.stringify({
            id: request.id,
            data: data,
          }));
        },
      );
    };
  };
};