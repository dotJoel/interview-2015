define([
	'jquery',
	'underscore',
	'backbone',
	'collections/Cone'
], function ( $, _, Backbone, ConeCollection ) {
	/**
	 * Contains all ordered ice cream cones
	 * @type @exp;Backbone@pro;Model@call;extend
	 */
	var OrderContainer = Backbone.Model.extend({
		defaults: {
			total: 0,
			cones: new ConeCollection
		},
		
		initialize: function() {
			Backbone.on('updateOrderDisplay', this.updateOrder, this);
		},
		
		events: {
			'change': 'updateOrder'
		},
		/**
		 * Fired when the Save Cone button is clicked
		 * @returns {undefined}
		 */
		updateOrder: function(){
			console.info('order updated');
			// display all cones
			$("#bic_orderItems").html('');
			this.set('total', 0);
			this.get('cones').each(function( cone ){
				if ( cone.get('coneType') === false ) {
					return true; // works as a "continue" while in an each()
				}
				var scoopDisplay = '';
				// get cost of cone
				var conePrice = 0;
				var coneName = '';
				$.each(cone.get('options'), function ( i, item ) {
					if (item.code === cone.get('coneType')) {
						conePrice += item.price;
						coneName = item.name;
					}
				});
				// get cost of scoops
				cone.scoops.each(function(scoop){
					$.each(scoop.get('options'), function ( i, item ) {
						if (item.code === scoop.get('flavor')) {
							conePrice += item.price;
							scoopDisplay += '<span style="color: #'+item.color+'" class="glyphicon glyphicon-ice-lolly" title="'+item.name+'"></span>';
						}
					});
				});
				// update order total
				this.set('total', this.get('total') + conePrice);
				// display entry
				$("#bic_orderItems").append(
					'<li class="list-group-item coneListItem" style="cursor:pointer" title="Click to edit" data-cid="'+cone.cid+'"><b>'+coneName+'</b> '+scoopDisplay+'<span class="pull-right">$'+conePrice.toFixed(2)+'</span></li>'
				);
			}, this);
			// display current total
			$("#bic_orderTotal").text(this.get('total').toFixed(2));
		}
	});
	return OrderContainer;
});
