const getMessagesBySenderIdAndReceiverId = async (sender_id, receiver_id) => {
    try {
        // const {sender_id, receiver_id} = requestBody
        console.log(sender_id, receiver_id);
        if (sender_id && receiver_id) {
            const getMessages = await strapi.entityService.findMany(
                "api::message.message",
                {
                    filters: {
                        sender_id: { $eq: sender_id },
                        receiver_id: { $eq: receiver_id },
                    },
                    populate: [
                        "sender_id",
                        "receiver_id",
                    ],
                }
            );
            return getMessages
        }
        else throw new Error("Error while getting status: ", err);
    } catch (err) {
        throw new Error("Error while getting status: ", err);
    }
  };

module.exports = {
    getMessagesBySenderIdAndReceiverId
}