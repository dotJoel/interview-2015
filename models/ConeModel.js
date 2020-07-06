define([
	'jquery',
	'underscore',
	'backbone',
	'collections/Scoops',
	'models/ScoopModel'
], function ( $, _, Backbone, Scoops, ScoopModel ) {
	var Cone = Backbone.Model.extend({
		coneType: false,
		defaults: {
			coneType: false,
			options: [
				{
					price: .5,
					name: 'Cup',
					code: 'cup'
				},
				{
					price: .75,
					name: 'Cone',
					code: 'cone'
				},
				{
					price: 1,
					name: 'Waffle Cone',
					code: 'waffleCone'
				}
			]
		},
		initialize: function () {
			this.scoops = new Scoops();
			this.scoops.add(new ScoopModel);
		}
	});
	return Cone;
});
