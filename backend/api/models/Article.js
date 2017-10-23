/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      unique: true,
    },
    longDescription: {
      type: 'longtext',
      required: true,
    },
    shortDescription: {
      type: 'text',
      required: true,
    },
    category: {
      collection: 'category',
      required: true,
    },
    urlSlug: {
      type: 'text',
      required: true,
    },
    imagen: {
      type: 'string',
      required: true,
    }
  }
  
};