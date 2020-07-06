define([
	'jquery',
	'underscore',
	'backbone',
	'models/ScoopModel'
], function( $, _, Backbone, ScoopModel ) {
	var Scoops = Backbone.Collection.extend({
		model: ScoopModel
	});
	return Scoops;
});