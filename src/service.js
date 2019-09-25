"use strict";

exports.__esModule = true;

/**
 * initial Service in WebWorker
 * @returns {instance} instance Service
 */
exports.default = function Service() {
  const subscribes = {};
  self.onmessage = event => {
    const request = JSON.parse(event.data);
    const req = request.data;
    const res = data =>
      self.postMessage({
        id: request.id,
        data: data
      });
    /**
     * on('name',(req,res)=>{})
     */
    const process = subscribes[request.name];
    process(req, res);
  };
  /**
   * initial listener
   * @param {string} name
   * @param {function} process
   * @returns {undefined} nothing
   */
  this.on = (name, process) => {
    subscribes[name] = process;
  };
};
