/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const CategoryModel = require('../models/Category');

module.exports = {
	
	index: ( req, res ) => {
		return Category.find().exec( ( err, categories ) => {
			if(err) res.serverError(err);
			return res.json( categories );
		} );
	},

	create: ( req, res ) => {
		const values = [
			{ name: 'Javascript' },
			{ name: 'HTML5' },
			{ name: 'CSS3' },
			{ name: 'PHP' },
			{ name: 'MySQL' }
		];

		return Category.create( values ).exec( ( err, records ) => {
			if(err) res.serverError(err);
			return res.json( records );
		} );
	}

};

