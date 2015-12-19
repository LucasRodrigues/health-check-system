export default class Format {
  static do(results) {
    let formattedResult = {
      health: true,
      total: 0,
      success: {
        total: 0,
        details: []
      },
      error: {
        total: 0,
        details: []
      }
    };

    results.forEach(result => {
      formattedResult.total++;
      formattedResult.health &= result.health;

      result.details.forEach(detail => {
        if (detail.health) {
          formattedResult.success.total ++;
          formattedResult.success.details.push(detail);
        } else {
          formattedResult.error.total ++;
          formattedResult.error.details.push(detail);
        }
      });
    });

    formattedResult.health = Boolean(formattedResult.health);

    return formattedResult;
  }
}
