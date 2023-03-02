'use strict';

module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/custom-api',
     handler: 'custom-api.game',
     config: {
      auth: false,
    },
    },
  ],
};
