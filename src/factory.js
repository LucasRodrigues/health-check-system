import healthCheckElasticSearch from 'health-check-elastic-search';
import healthCheckMongodb from 'health-check-mongodb';
import healthCheckMssql from 'health-check-mssql';
import healthCheckMysql from 'health-check-mysql';
import healthCheckRabbitMq from 'health-check-rabbitmq';
import healthCheckRedis from 'health-check-redis';

const healthCheckType = {
  elasticSearch: healthCheckElasticSearch,
  mongodb: healthCheckMongodb,
  mssql: healthCheckMssql,
  mysql: healthCheckMysql,
  rabbitMq: healthCheckRabbitMq,
  redis: healthCheckRedis
};

export default class Factory {

  static get(type) {
    return healthCheckType[type];
  }
}
