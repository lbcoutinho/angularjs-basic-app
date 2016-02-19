'use strict';

angular.module('app.main').controller('MainController', 
  ['$log', '$router', MainController]);

function MainController($log, $router) {
  $log.info('entrei no main controller');

  $router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home' }
  ]);
};