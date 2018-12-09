"use strict";

exports.__esModule = true;

/**
 * Initial WebWorker with file name 
 * @param {string} file 
 * @returns {undefined} nothing
 */
exports.Client = function Client(file) {
  const worker = new Worker(file);
  const repo = {};
  worker.addEventListener('message', event => {
    const response = JSON.parse(event.data);
    repo[response.id].callback(response.data);
    delete repo[response.id];
  });
  /**
   * emit to OrkerService
   * @param {string} name
   * @param {any} data
   * @param {fucntion} callback
   */
  this.emit = (name, data, callback) => {
    const id = Math.random().toString().substr(2) + (new Date().getTime());
    repo[id] = {
      id,
      name,
      data,
      callback,
    }
    worker.postMessage(JSON.stringify(repo[id]));
  }
};