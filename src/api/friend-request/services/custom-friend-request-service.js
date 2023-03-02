const custom_api = async (ctx) => {
  try {
    const senderAcc = await strapi.entityService.findMany(
      "api::friend-request.friend-request",
      {
        filters: { status: { $eq: 'pending' } },
        populate: [
          "sender_id",
          "receiver_id",
        ],
        limit: 2
      }
    );
    return senderAcc
  } catch (err) {
    throw new Error("Failed to fetch data from database");
  }
};

const updateStatusOfFriendRequest = async (requestBody) => {
  try {
    const {status, id, blocked} = requestBody
    console.log(status, id, blocked)
    const getGroupById = await strapi.entityService.findOne(
      "api::friend-request.friend-request", id
    )
    if (getGroupById && status) {
      return await strapi.entityService.update(
        "api::friend-request.friend-request", id,
        {
          data: {status: status}
        }
      )
    }
    else if (getGroupById && blocked) {
      return await strapi.entityService.update(
        "api::friend-request.friend-request", id,
        {
          data: {blocked: blocked}
        }
      )
    }
    else throw new Error("Error while updating status: ", err);
  } catch (err) {
    throw new Error("Error while updating status: ", err);
  }
};


module.exports = {
  custom_api,
  updateStatusOfFriendRequest,
};