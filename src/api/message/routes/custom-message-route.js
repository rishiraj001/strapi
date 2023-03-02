'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/getMessagesBySenderIdAndReceiverId',
      handler: 'custom-message-controller.getMessagesBySenderIdAndReceiverId',
      config: {
        auth: false,
      }
    },
  ]
};
