'use strict';

/**
 * bivouac service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bivouac.bivouac');
