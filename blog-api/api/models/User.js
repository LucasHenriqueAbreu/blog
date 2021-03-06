/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "user",
  attributes: {
    first_name: {
		type: "string",
		required: true
	},
	last_name: {
		type: "string",
		required: true
	},
    age: {
		type: "integer"
	},
    posts: {
      collection: "post",
      via: "user"
    }
  }
};
