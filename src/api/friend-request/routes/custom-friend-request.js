'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/custom-friend-request-api',
      handler: 'custom-friend-request-controller.game',
      config: {
        auth: false,
      }
    },

    {
      method: 'POST',
      path: '/updateStatusOfFriendRequest',
      handler: 'custom-friend-request-controller.updateStatusOfFriendRequest',
      config: {
        auth: false,
      }
    },

    {
      method: 'POST',
      path: '/updateBlockUnblockStatus',
      handler: 'custom-friend-request-controller.updateBlockUnblockStatus',
      config: {
        auth: false,
      }
    },
  ]
};
