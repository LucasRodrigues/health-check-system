import Format from './format';
import HealthCheckTypes from './healthCheckTypes';

export default class HealthCheck {

  do(configuration) {
    return new Promise((resolve, rejected) => {
      HealthCheckTypes.do(configuration)
        .then(results => {
          const formatResult = Format.do(results);
          resolve(formatResult);
        })
        .catch(error => {
          rejected(error);
        });
    });
  }
}
