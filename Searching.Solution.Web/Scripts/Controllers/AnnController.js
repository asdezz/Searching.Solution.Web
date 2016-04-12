var AnnController = function ($scope, $http, ApiService,$stateParams) {
    
    var stateParam = $stateParams.categories_id;
    if (stateParam ==  undefined) {
        console.log('check undefined success!');
        var jsonAnn = ApiService.GetAnn()
    .success(function (response) {
        $scope.AnnList = response;
    })
    .error(function (fail) {
        console.log('fail', fail);
    });
    }
    else{
    console.log('state param:');
    console.log(stateParam);
    ApiService.SaveCategoryFilter($stateParams.categories_id);
    ApiService.CategoryFilter()
        .success(function (response) {
            $scope.AnnList = response;
        })
        .error(function (fail) {
            console.log('fail', fail);
        });
    }
    //var filter = ApiService.GetFilter();
    //console.log('filter category_id on AnnController:');
    //console.log(filter);
    //if (filter.Category_id == 0)
    //{
    //var jsonAnn = ApiService.GetAnn()
    //.success(function (response) {
    //    $scope.AnnList = response;
    //})
    //.error(function (fail) {
    //    console.log('fail', fail);
    //});
    //}
    //else {
   
    //    var jsAnn = ApiService.CategoryFilter()
    //    .success(function (response) {
    //        $scope.AnnList = response;
    //    })
    //    .error(function (fail) {
    //        console.log('fail', fail);
    //    });
    //}
}

AnnController.$inject = ['$scope', '$http', 'ApiService','$stateParams'];