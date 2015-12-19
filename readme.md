# Health Check System

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-system.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-system)

## Install

´´´
npm install health-check-system
´´´

## Usage
´´´
var healthCheckSystem = require('health-check-system');

healthCheckSystem.do({
  redis:[
    {
      host:'127.0.0.1',
      port: 6379
    },
    {
      host:'127.0.0.1',
      port: 639
    }
  ]
})
.then(result => {
  console.log(result);
})
.catch(error =>{
  console.log(error);
});
´´´
