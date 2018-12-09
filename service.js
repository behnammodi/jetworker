"use strict";

exports.__esModule = true;

/**
 * Service in WebWorker 
 * @returns {undefined} nothing
 */
exports.Service = function Service() {
  const repo = {};
  const funcs = {};
  /**
   * initial listener
   * @param {string} name
   * @param {function} callback
   */
  this.on = (name, callback) => {
    funcs[name] = callback;
    self.onmessage = event => {
      const req = JSON.parse(event.data);
      repo[req.id] = req;      
      funcs[req.name]({
        res: data => {
          self.postMessage(JSON.stringify({
            id: req.id,
            data,
          }))
          delete repo[req.id];
        },
        data: req.data,
      })
    }
  }
};