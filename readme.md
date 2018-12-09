## jetworker

[![NPM](https://nodei.co/npm/jetworker.png)](https://nodei.co/npm/jetworker/)

[![install size](https://packagephobia.now.sh/badge?p=jetworker)](https://packagephobia.now.sh/result?p=jetworker) [![dependencies](https://david-dm.org/uxitten/jetworker.svg)](https://david-dm.org/uxitten/jetworker.svg)

jetworker easy way for community with WebWorker

## install
```npm
npm install jetworker --save
```

jetwork has two section ```Client``` and ```Service```

```Client``` for use in main thread website or webapp

```Service``` for use in WebWorker file

## import Client
```javascript
const Client = require('jetemit/client');
//or
import Client from 'jetemit/client';
```

## import Service
```javascript
const Service = require('jetemit/service');
//or
import Service from 'jetemit/service';
```

## use web
```javascript
import Client from 'jetemit/client';

const client = new Client('./worker.js');

/**
 * client.emit(name, data, callback)
 * @param {string} name is function name in worker
 * @param {any} data send to worker
 * @param {function} callback for recive response from worker
 * @returns {undefined} nothing
 */
client.emit(
  'multiple',   
  { a: 2, b: 3 }, 
  data => console.log(data),
);
```

## in worker.js
```javascript
import Service from 'jetemit/service';

const service = new Service();

/**
 * service.on(name, process)
 * @param {string} name function name for call in client
 * @param {function} process function, req is data recived from client and res is function for send result to client 
 */
service.on(  
  'multiple',   
  (req, res) => res(req.a * req.b) 
);
```