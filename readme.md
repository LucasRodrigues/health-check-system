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

## Json Format

```
{
    redis: [
        // For object format visit (https://github.com/LucasRodrigues/health-check-redis)
    ],
    mongodb: [
        // For object format visit (https://github.com/LucasRodrigues/health-check-mongodb)
    ],
    elasticSearch: [
        // For object format visit (https://github.com/LucasRodrigues/health-check-elastic-search)
    ],
    mssql: [
        // For object format visit (https://github.com/LucasRodrigues/health-check-mssql)
    ],
    mysql: [
        // For object format visit (https://github.com/LucasRodrigues/health-check-mysql)
    ],
    rabbitMq: [
        // For object format visit (https://github.com/LucasRodrigues/health-check-rabbitmq)
    ]
}
```


## Client

### Command line
https://github.com/LucasRodrigues/health-check-system-cmd