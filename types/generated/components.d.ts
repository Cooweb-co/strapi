import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkExperience extends Schema.Component {
  collectionName: 'components_work_experiences';
  info: {
    displayName: 'Experience';
    description: 'Experiencia laboral del funcionario';
  };
  attributes: {
    position: Attribute.String & Attribute.Required;
    entity: Attribute.String & Attribute.Required;
    startDate: Attribute.Date & Attribute.Required;
    endDate: Attribute.Date & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'work.experience': WorkExperience;
    }
  }
}
