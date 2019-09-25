"use strict";

exports.__esModule = true;
/**
 * initial Client with worker filename
 * @param {string} filename
 * @returns {instance} instance Client
 */

exports.default = function Client(filename) {
  function generateId() {
    return Math.random().toString().substr(2) + new Date().getTime();
  }

  var worker = new Worker(filename);
  var repository = {};
  worker.addEventListener("message", function (event) {
    var response = JSON.parse(event.data);
    var id = response.id;
    repository[id] && repository[id].callback(response.data);
    /**
     * every emit is dedicated. inside emit we generate id
     * for every emit anf after recive message from worker
     * we delete id, becuase every emit just recive message
     * from worker just once
     */

    delete repository[id];
  });
  /**
   * emit to client
   * @param {string} name
   * @param {any} data
   * @param {fucntion} callback
   * @returns {undefined} nothing
   */

  this.emit = function (name, data, callback) {
    /**
     
     */
    var id = generateId();
    repository[id] = {
      /**
       * is i unige every emit need id when recive message
       * from worker we can find emiter to give data
       */
      id: id,

      /**
       * we inited function as listener on worker every
       * emiter name determine name for worker run correct
       * listener
       */
      name: name,

      /**
       * data ca be any type of string, object, number, array
       */
      data: data,

      /**
       * initial callback becuase we want to run that after
       * recive respose from worker
       */
      callback: callback
    };
    worker.postMessage(JSON.stringify(repository[id]));
  };
};