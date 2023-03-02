'use strict';

/**
 * room1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room1.room1');
