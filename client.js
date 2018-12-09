"use strict";

exports.__esModule = true;

/**
 * Initial WebWorker with file name 
 * @param {string} file 
 * @returns {undefined} nothing
 */
exports.default = function Client(filename) {
  var worker = new Worker(filename);
  var repository = {};
  worker.addEventListener('message', function (event) {
    var response = JSON.parse(event.data);
    repository[response.id].callback(response.data);
    delete repository[response.id];
  });
  /**
   * emit to OrkerService
   * @param {string} name
   * @param {any} data
   * @param {fucntion} callback
   */
  this.emit = function (name, data, callback) {
    var id = Math.random().toString().substr(2) + (new Date().getTime());
    repository[id] = {
      id,
      name,
      data,
      callback,
    }
    worker.postMessage(JSON.stringify(repository[id]));
  }
};