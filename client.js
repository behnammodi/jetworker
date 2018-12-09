"use strict";

exports.__esModule = true;

/**
 * Initial WebWorker with file name 
 * @param {string} file 
 * @returns {undefined} nothing
 */
exports.default = function Client(filename) {
  function generateId() {
    return Math.random().toString().substr(2) + (new Date().getTime());
  }
  var worker = new Worker(filename);
  var repository = {};
  worker.addEventListener('message', function (event) {
    var response = JSON.parse(event.data);
    var id = response.id;
    repository[id] && repository[id].callback(response.data);
    delete repository[id];
  });
  /**
   * emit to OrkerService
   * @param {string} name
   * @param {any} data
   * @param {fucntion} callback
   */
  this.emit = function (name, data, callback) {
    var id = generateId();
    repository[id] = {
      id: id,
      name: name,
      data: data,
      callback: callback,
    }
    worker.postMessage(JSON.stringify(repository[id]));
  }
};