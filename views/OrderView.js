define([
	'jquery',
	'underscore',
	'backbone',
	'models/ConeModel',
	'views/ConeView'
], function ( $, _, Backbone, ConeModel, ConeView ) {
	var OrderView = Backbone.View.extend({
		/**
		 * 
		 */
		el: 'body',
		/**
		 * 
		 * @param {type} attrs
		 * @returns {undefined}
		 */
		initialize: function () {
			this.render();
		},
		/**
		 * 
		 * @returns {Order_L8.OrderAnonym$1}
		 */
		render: function () {
			var template = _.template($("#template-order").html(), this.options);
			$('#orderSummary').append(template);
			return this;
		},
		/**
		 * 
		 */
		events: {
			"click #newCone": 'addCone',
			"click .coneListItem": 'editCone',
			"click #saveCone": 'saveCone'
		},
		/**
		 * 
		 * @param {type} event
		 * @returns {undefined}
		 */
		editCone: function(event){
			console.log('editing cone: '+$(event.currentTarget).attr('data-cid'));
			Backbone.trigger('clearConeView');
			var cone = Backbone.AppModel.get('cones').get($(event.currentTarget).attr('data-cid'));
			var coneView = new ConeView({
				model: cone
			});
		},
		/**
		 * 
		 * @returns {undefined}
		 */
		saveCone: function() {
			console.info('saving cone');
			Backbone.trigger('clearConeView');
			// add current ConeCollection to the OrderCollection
			Backbone.AppModel.updateOrder();
			this.addCone();
		},
		/**
		 * 
		 * @returns {undefined}
		 */
		addCone: function() {
			console.info('adding cone');
			// add a new cone to the cone collection
			var cone = new ConeModel();
			Backbone.AppModel.get('cones').add(cone);
			// render a ConeView for this new cone
			var coneView = new ConeView({
				model: cone
			});
		}
	});

	return OrderView;
});
