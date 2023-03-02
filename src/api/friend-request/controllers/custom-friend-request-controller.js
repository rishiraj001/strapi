const { custom_api, updateStatusOfFriendRequest } = require('../services/custom-friend-request-service')

module.exports = {
    async game(ctx) {
      try {
        const data = await custom_api();
        return data
      } catch (err) {
        ctx.badRequest("Post report controller error", { moreDetails: err });
      }
    },

    async updateStatusOfFriendRequest(ctx) {
      try {
        return await updateStatusOfFriendRequest(ctx.request.body)
      } catch (err) {
        ctx.badRequest("Error while updating status: ", err);
      }
    },

    async updateBlockUnblockStatus(ctx) {
      try {
        return await updateStatusOfFriendRequest(ctx.request.body)
      } catch (err) {
        ctx.badRequest("Error while checking status: ", err);
      }
    }
  };