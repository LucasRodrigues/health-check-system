import healthCheckElasticSearch from 'health-check-elastic-search';
import healthCheckMongodb from 'health-check-mongodb';
import healthCheckMssql from 'health-check-mssql';
import healthCheckMysql from 'health-check-mysql';
import healthCheckRabbitMq from 'health-check-rabbitmq';
import healthCheckRedis from 'health-check-redis';
import healthCheckApi from 'health-check-api';

const healthCheckType = {
  elasticSearch: healthCheckElasticSearch,
  mongodb: healthCheckMongodb,
  mssql: healthCheckMssql,
  mysql: healthCheckMysql,
  rabbitMq: healthCheckRabbitMq,
  redis: healthCheckRedis,
  api: healthCheckApi
};

export default class Factory {

  static get(type) {
    return healthCheckType[type];
  }
}
