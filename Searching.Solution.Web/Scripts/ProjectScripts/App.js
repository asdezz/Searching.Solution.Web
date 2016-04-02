var app = angular.module('appModule', ['ui.router', 'ui.bootstrap', 'LocalStorageModule']);
//controllers
app.controller('SearchController', SearchController);
app.controller('AnnController', AnnController);
app.controller('StartController', StartController);









//services
app.service('ApiService', ApiService);

