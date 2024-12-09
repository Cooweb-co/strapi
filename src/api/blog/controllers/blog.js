'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        featuredImage: true,
        categories: {
          fields: ['name', 'slug', 'description']
        },
        tags: {
          fields: ['name', 'slug']
        },
        author: {
          fields: ['firstname', 'lastname', 'username']
        }
      }
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        featuredImage: true,
        categories: {
          fields: ['name', 'slug', 'description']
        },
        tags: {
          fields: ['name', 'slug']
        },
        author: {
          fields: ['firstname', 'lastname', 'username']
        }
      }
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  }
})); 