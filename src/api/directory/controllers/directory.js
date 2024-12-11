'use strict';

/**
 * directory controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::directory.directory', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        photo: true,
        workExperience: {
          sort: 'startDate:desc'
        }
      }
    };

    const entities = await strapi.entityService.findMany('api::directory.directory', {
      ...ctx.query
    });

    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitizedEntities);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    ctx.query = {
      ...ctx.query,
      populate: {
        photo: true,
        workExperience: {
          sort: 'startDate:desc'
        }
      }
    };

    const entity = await strapi.entityService.findOne('api::directory.directory', id, {
      ...ctx.query
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async findByDepartment(ctx) {
    const { department } = ctx.params;
    
    ctx.query = {
      ...ctx.query,
      filters: {
        department: {
          $eq: department
        }
      },
      populate: {
        photo: true,
        workExperience: {
          sort: 'startDate:desc'
        }
      }
    };

    const entities = await strapi.entityService.findMany('api::directory.directory', {
      ...ctx.query
    });

    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitizedEntities);
  },

  async bulkCreate(ctx) {
    try {
      const { data } = ctx.request.body;

      const results = [];
      const errors = [];

      for (const item of data) {
        try {
          // Procesar el nombre que viene como array
          const [firstName, ...lastNameParts] = item.name;
          const lastName = lastNameParts.join(' ');

          // Preparar los datos para el formato correcto
          const entry = {
            firstName,
            lastName,
            bio: item.bio,
            gender: item.gender,
            position: item.contactInfo.position,
            department: item.contactInfo.department,
            grade: item.contactInfo.grade,
            birthCountry: item.contactInfo.birthPlace.country,
            birthState: item.contactInfo.birthPlace.state,
            birthCity: item.contactInfo.birthPlace.city,
            email: item.contactInfo.email,
            phone: item.contactInfo.phone,
            professionalDegree: item.academicTraining.professional,
            additionalEducation: item.academicTraining.additionalAcademic,
            technicalDegree: item.academicTraining.technical,
            // La foto se manejará por separado ya que requiere upload
            workExperience: item.workExperience.map(exp => ({
              position: exp.position,
              entity: exp.entity,
              startDate: exp.startDate,
              endDate: exp.endDate
            }))
          };

          // Crear el registro
          const result = await strapi.entityService.create('api::directory.directory', {
            data: entry
          });

          results.push(result);
        } catch (error) {
          errors.push({
            item,
            error: error.message
          });
        }
      }

      return {
        success: true,
        results,
        errors,
        message: `Processed ${results.length} entries successfully. ${errors.length} errors found.`
      };

    } catch (error) {
      ctx.throw(500, error);
    }
  }
})); 