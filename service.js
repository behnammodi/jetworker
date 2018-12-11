"use strict";

exports.__esModule = true;

/**
 * initial Service in WebWorker
 * @returns {instance} instance Service
 */
exports.default = function Service() {
  var subscribes = {};
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
  /**
   * initial listener
   * @param {string} name
   * @param {function} process
   * @returns {undefined} nothing
   */
  this.on = function (name, process) {
    subscribes[name] = process;    
  };
};