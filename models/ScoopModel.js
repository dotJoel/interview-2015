define([
	'jquery',
	'underscore',
	'backbone'
], function ( $, _, Backbone ) {
	var ScoopModel = Backbone.Model.extend({
		defaults: {
			flavor: false,
			options: [
				{
					code: 'vanilla',
					name: 'Vanilla',
					price: 1,
					color: 'ECE88F'
				},
				{
					code: 'chocolate',
					name: 'Chocolate',
					price: 1.1,
					color: 'CDBB99'
				},
				{
					code: 'strawberry',
					name: 'Strawberry',
					price: 1.15,
					color: 'FBCFCF'
				}
			]
		}
	});
	return ScoopModel;
});