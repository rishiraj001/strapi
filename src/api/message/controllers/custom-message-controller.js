const { getMessagesBySenderIdAndReceiverId } = require('../services/custom-message-service')

module.exports = {

    async getMessagesBySenderIdAndReceiverId(ctx) {
      try {
        console.log(ctx.query);
        return await getMessagesBySenderIdAndReceiverId(ctx.query.sender_id, ctx.query.receiver_id)
      } catch (err) {
        ctx.badRequest("Error while getting messages: ", err);
      }
    },

  };