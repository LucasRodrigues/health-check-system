# Health Check System

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-system.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-system)

## Install

```
$ npm install health-check-system
```

## Support

- Redis (https://github.com/LucasRodrigues/health-check-redis)
- Mongodb (https://github.com/LucasRodrigues/health-check-mongodb)
- Mssql (https://github.com/LucasRodrigues/health-check-mssql)
- Mysql (https://github.com/LucasRodrigues/health-check-mysql)
- RabbitMq (https://github.com/LucasRodrigues/health-check-rabbitmq)
- ElasticSearch (https://github.com/LucasRodrigues/health-check-elastic-search)

## Usage

```
var healthCheckSystem = require('health-check-system');

var configuration = {
    redis: [
    {
        host: '127.0.0.1'
        port: 6379
    }
    ]
};

healthCheckSystem.do(configuration)
    .then(function (result){
        console.log(result)
    })
    .catch(function (error){
        console.log(error)
    })
```

## Client

### Command line
https://github.com/LucasRodrigues/health-check-system-cmd