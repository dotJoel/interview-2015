define([
	'jquery',
	'underscore',
	'backbone',
	'models/ScoopModel'
], function ( $, _, Backbone, ScoopModel ) {
	var ConeView = Backbone.View.extend({
		/**
		 * 
		 */
		el: '#coneConfig',
		/**
		 * 
		 * @returns {undefined}
		 */
		initialize: function () {
			this.render();
			Backbone.on('clearConeView', this.undelegateEvents, this);
		},
		/**
		 * 
		 * @returns {Cone_L5.ConeAnonym$1}
		 */
		render: function () {
			console.info('rendering coneConfig');
			var template = _.template($("#template-cone").html(), this.options);
			$('#coneConfig').html(template);
			this.displayOptions();
			return this;
		},
		/**
		 * 
		 */
		events: {
			"change .coneTypeContainer": 'updateConeType',
			"change .scoopFlavorsContainer": 'updateScoop',
			"click #addScoop": 'addScoopSelector',
			"click #removeCone": 'removeCone'
		},
		/**
		 * 
		 * @param {type} event
		 * @returns {undefined}
		 */
		updateConeType: function ( event ) {
			this.model.set({'coneType': event.target.value});
		},
		/**
		 * 
		 * @param {type} event
		 * @returns {undefined}
		 */
		updateScoop: function ( event ) {
			if ( $(event.target).val().length ) {
				var scoop = this.model.scoops.get($(event.target).attr('data-cid'));
				scoop.set('flavor', $(event.target).val());
			} else {
				console.info('removing scoop');
				this.model.scoops.remove($(event.target).attr('data-cid'));
				$(event.target).remove();
			}
		},
		/**
		 * 
		 * @returns {undefined}
		 */
		removeCone: function() {
			if (this.model.changedAttributes() !== false) {
				console.info('removing cone');
				Backbone.AppModel.get('cones').remove(this.model);
				// update other UI elements
				Backbone.trigger('clearConeView');
				$("#coneConfig").html('<div class="btn btn-primary" id="newCone">Add New Cone</div>');
			}
		},
		/**
		 * 
		 * @param {type} event
		 * @returns {undefined}
		 */
		addScoopSelector: function ( event ) {
			var newScoop = new ScoopModel();
			this.model.scoops.add(newScoop);
			var $selectInput = this.addOptionsToSelect(newScoop.get('options'), "scoopFlavorsContainer");
			$selectInput.attr('data-cid', newScoop.cid);
		},
		/**
		 * 
		 * @returns {undefined}
		 */
		displayOptions: function () {
			// cone options
			var $coneTypeSelector = this.addOptionsToSelect(this.model.get('options'), "coneTypeContainer");
			if (this.model.get('coneType')) {
				$coneTypeSelector.val(this.model.get('coneType'));
			}
			// scoop options
			this.model.scoops.each(function (scoop){
				var $selectInput = this.addOptionsToSelect(scoop.get('options'), "scoopFlavorsContainer");
				// tag the input with it's model's ID
				$selectInput.attr('data-cid', scoop.cid);
				if (scoop.get('flavor')) {
					$selectInput.val(scoop.get('flavor'));
				}
			}, this);
		},
		/**
		 * 
		 * @param {type} options
		 * @param {type} containerId
		 * @returns {$}
		 */
		addOptionsToSelect: function ( options, containerId ) {
			var $selectInput = $('<select class="'+containerId+' form-control">');
			$("#"+containerId).append($selectInput);
			$selectInput.append($('<option>', {value: '', text: '-- none --'}));
			$.each(options, function ( i, item ) {
				$selectInput.append($('<option>', {
					value: item.code,
					text: item.name + ' - $' + item.price.toFixed(2)
				}));
			});
			return $selectInput;
		}
	});

	return ConeView;
});
