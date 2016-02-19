'use strict';

angular.module('app.home').controller('HomeController', ['$log', '$router', HomeController]);

function HomeController($log, $router) {
	$log.log('ENTREI NO HOME CONTROLLER');
	this.name = 'Leandro';
	// $router.config([{
	// 	path: '/',
	// 	component: 'home'
	// }]);
});