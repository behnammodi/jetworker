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
    var req = request.data;

    var res = function res(data) {
      return self.postMessage({
        id: request.id,
        data: data
      });
    };
    /**
     * on('name',(req,res)=>{})
     */


    var process = subscribes[request.name];
    process(req, res);
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