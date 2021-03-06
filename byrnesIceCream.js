// ByrnesIceCream
// Filename: byrnesIceCream.js

require.config({
	paths: {
		jquery: 'libs/jquery.1.11.2.min',
		underscore: 'libs/underscore.1.8.2.min',
		backbone: 'libs/backbone.1.1.2.min'
	},
	shim: {
		'backbone': {
			//These script dependencies should be loaded before loading backbone.js
			deps: [ 'underscore', 'jquery' ],
			//Once loaded, use the global 'Backbone' as the module value.
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
});

require([
	// Load our app module and pass it to our definition function
	'app'
], function( App ) {
	// The "app" dependency is passed in as "App"
	App.initialize();
});
