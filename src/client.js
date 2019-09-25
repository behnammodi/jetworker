"use strict";

exports.__esModule = true;

/**
 * initial Client with worker filename
 * @param {string} filename
 * @returns {instance} instance Client
 */
exports.default = function Client(filename) {
  function generateId() {
    return (
      Math.random()
        .toString()
        .substr(2) + new Date().getTime()
    );
  }
  const worker = new Worker(filename);
  const repository = {};
  worker.addEventListener("message", event => {
    const response = event.data;
    const id = response.id;
    repository[id] && repository[id].callback(response.data);
    /**
     * every post is dedicated. inside post we generate id
     * for every post anf after recive message from worker
     * we delete id, becuase every post just recive message
     * from worker just once
     */
    delete repository[id];
  });
  /**
   * post to service
   * @param {string} name
   * @param {any} data
   * @param {fucntion} callback
   * @returns {undefined} nothing
   */
  this.post = (name, data, callback) => {
    /**
     
     */
    const id = generateId();
    repository[id] = {
      /**
       * is i unige every post need id when recive message
       * from worker we can find emitter to give data
       */
      id: id,
      /**
       * we inited function as listener on worker every
       * emitter name determine name for worker run correct
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
