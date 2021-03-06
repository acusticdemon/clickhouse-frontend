(function(angular, smi2) {
	'use strict';

	angular.module(smi2.app.name)

	/**
	 * Начальная инициализация провайдеров SPA приложения
	 */
	.config([
		'$locationProvider',
		'$httpProvider',
		'$sceProvider',
		'$urlRouterProvider',
		function($locationProvider, $httpProvider, $sceProvider, $urlRouterProvider) {

			// Запуск HTML5 режима HISTORY API, без решетки
			$locationProvider.html5Mode(true).hashPrefix('!');

			// Проверка авторизации в httpInterceptor
			$httpProvider.interceptors.push('HttpInterceptor');

			// Разрешаю ng-bind-html
			$sceProvider.enabled(false);

			// Если state не найден - шлю 404
			$urlRouterProvider.otherwise(function($injector) {
				var $state = $injector.get("$state");
				$state.transitionTo('404');
			});
		}
	]);
})(angular, smi2);
