(function() {
	'use strict';

	var smi2 = window.smi2 = window.smi2 || {};
	smi2.app = {
		name: 'SMI2',
		build: '16.10.12'
	};

	// Подключение сторонних библиотек
	angular.module(smi2.app.name, [
		'ngAnimate',
		'ui.router',
		'LocalStorageModule',
		'lumx',
		'angularScreenfull',
		'ui.ace',
		'ui.grid',
		'ui.grid.autoResize',
        'ngSanitize'
	]);

})();
