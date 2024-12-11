'use strict';

/**
 * directory router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/directories',
      handler: 'directory.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/directories/:id',
      handler: 'directory.findOne',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/directories/department/:department',
      handler: 'directory.findByDepartment',
      config: {
        policies: []
      }
    },
    {
      method: 'POST',
      path: '/directories',
      handler: 'directory.create',
      config: {
        policies: []
      }
    },
    {
      method: 'POST',
      path: '/directories/bulk',
      handler: 'directory.bulkCreate',
      config: {
        policies: []
      }
    },
    {
      method: 'PUT',
      path: '/directories/:id',
      handler: 'directory.update',
      config: {
        policies: []
      }
    },
    {
      method: 'DELETE',
      path: '/directories/:id',
      handler: 'directory.delete',
      config: {
        policies: []
      }
    }
  ]
}; 