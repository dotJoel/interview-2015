// Filename: app.js
define([
	'jquery',
	'underscore',
	'backbone',
	'models/OrderContainer',
	'views/OrderView'
], function( $, _, Backbone, OrderContainer, OrderView ) {

	var initialize = function() {
		Backbone.AppModel = new OrderContainer();
		var ov = new OrderView();
	};

	return {
		initialize: initialize
	};
});
