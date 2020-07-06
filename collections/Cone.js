define([
	'jquery',
	'underscore',
	'backbone'
], function( $, _, Backbone ) {
	var Cone = Backbone.Collection.extend({
		model: Cone,
		initialize: function() {
			this.bind("remove", this.onModelRemoved, this);
		},
		onModelRemoved: function() {
			console.info('removed from cone collection');
			Backbone.trigger('updateOrderDisplay');
		}
	});
	return Cone;
});
