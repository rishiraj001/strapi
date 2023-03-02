module.exports = {
  async game(ctx, next) {
    try {
      const data = await strapi
        .service("api::custom-api.custom-api")
        .custom_api();
      console.log(data);

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};