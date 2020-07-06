({
    baseUrl: "./",
    out: "./build/byrnesIceCream-built.js",
	name: "byrnesIceCream",
	paths: {
		app: 'app',
		jquery: 'libs/jquery.1.11.2.min',
		underscore: 'libs/underscore.1.8.2.min',
		backbone: 'libs/backbone.1.1.2.min'
	},
	shim: {
		'backbone': {
			deps: [ 'underscore', 'jquery' ],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
})