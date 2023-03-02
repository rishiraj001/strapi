'use strict';

/**
 * custom-api service
 */

module.exports = {
    custom_api: async () => {
        // fetching data
      const entries = await strapi.entityService.findMany(
        "api::room1.room1",
        {
            populate: {
            //     up_users: {
            //     fields: ["username", "email"],
            //   },
            //   category: {
            //     fields: ["username"],
            //   },
            },
        }
      );
      return entries
    }
}