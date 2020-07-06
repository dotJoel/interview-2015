define([
	'jquery',
	'underscore',
	'backbone'
], function ( $, _, Backbone ) {
	var OrderContainerView = Backbone.View.extend({
		el: '#orderSummary',
		initialize: function () {
		},
		render: function () {
			return this;
		}
	});

	return OrderContainerView;
});