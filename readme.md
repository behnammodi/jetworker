## jetworker

[![NPM](https://nodei.co/npm/jetworker.png)](https://nodei.co/npm/jetworker/)

[![install size](https://packagephobia.now.sh/badge?p=jetworker)](https://packagephobia.now.sh/result?p=jetworker) [![dependencies](https://david-dm.org/uxitten/jetworker.svg)](https://david-dm.org/uxitten/jetworker.svg)

<a href="https://www.npmjs.com/package/jetworker">
  <img src="https://img.shields.io/npm/v/jetworker.svg" alt="Version">
</a>

<a href="https://www.npmjs.com/package/jetworker">
  <img src="https://img.shields.io/npm/l/jetworker.svg" alt="License">
</a>

<a href="https://www.npmjs.com/package/jetworker">
  <img src="https://img.shields.io/npm/dm/jetworker.svg" alt="Downloads">
</a>

jetworker easy way for community with WebWorker

### Browser compatibility desktop

|Chrome|Firefox|Internet Explorer|Opera|Safari|
|------|-------|-----------------|-----|------|
|4     |3.5    |10               |10.6 |4     |

### Browser compatibility mobile

|Android|Chrome|Firefox|Internet Explorer|Opera|Safari
|-------|------|-------|-----------------|-----|-----|
|4.4    |4     |3.5    |10               |11.5 |5.1  |

## install
```npm
npm install jetworker --save
```

jetwork has two section ```Client``` and ```Service```

```Client``` for use in main thread website or webapp

```Service``` for use in WebWorker file

## import Client
```javascript
const Client = require('jetworker/client');
//or
import Client from 'jetworker/client';
```

## import Service
```javascript
const Service = require('jetworker/service');
//or
import Service from 'jetworker/service';
```

## use web
```javascript
import Client from 'jetworker/client';

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
import Service from 'jetworker/service';

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