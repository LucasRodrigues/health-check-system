import Factory from './factory';

export default class HealthCheckTypes {

  static do(configuration) {
    return new Promise((resolve, rejected) => {
      let promises = [];

      for (const type in configuration) {
        if (type) {
          const healthCheckType = Factory.get(type);

          if (healthCheckType) {
            const configurationType = configuration[type];
            promises.push(healthCheckType.do(configurationType));
          }
        }
      }

      Promise.all(promises)
        .then(results => {
          resolve(results);
        })
        .catch(error => {
          rejected(error);
        });
    });
  }
}
