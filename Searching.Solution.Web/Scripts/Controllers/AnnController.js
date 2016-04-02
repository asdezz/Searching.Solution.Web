var AnnController = function ($scope, $http, ApiService,$stateParams) {
    
    var stateParam = $stateParams.categories_id;
    console.log('state param:');
    console.log(stateParam);
    var filter = ApiService.GetFilter();
    console.log('filter category_id on AnnController:');
    console.log(filter);
    if (filter.Category_id == 0)
    {
    var jsonAnn = ApiService.GetAnn()
    .success(function (response) {
        $scope.AnnList = response;
    })
    .error(function (fail) {
        console.log('fail', fail);
    });
    }
    else {
   
        var jsAnn = ApiService.CategoryFilter()
        .success(function (response) {
            $scope.AnnList = response;
        })
        .error(function (fail) {
            console.log('fail', fail);
        });
    }
}

AnnController.$inject = ['$scope', '$http', 'ApiService','$stateParams'];