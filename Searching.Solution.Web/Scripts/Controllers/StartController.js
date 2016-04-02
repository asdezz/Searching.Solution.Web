var StartController = function ($scope, $http, ApiService) {
    console.log('Start Controller!');
    $scope.Clear = function () {
        console.log('clear work!')
        console.clear();
        ApiService.ClearFilter();
    };

}
StartController.$inject = ['$scope', '$http', 'ApiService'];