//app.controller('SearchController', ['$scope', '$http', 'ApiService', function ($scope, $http, ApiService) {

var SearchController = function ($scope, $http, ApiService, localStorageService)
{
    console.clear();
    $scope.FilterAnn = {
    Category_id: 0,
    Country_id: 0,
    City_id: 0,
    Areas_id: 0,
    Gender_user: "",
    DateAnnouncing: null,
    MinDateBirthday: null,
    MaxDateBirthday: null,
    Popular: null,
    DateSort: null
};

    var Filter = {
        Category_id: 0,
        Country_id: null,
        City_id: null,
        Areas_id: null,
        Gender_user: null,
        DateAnnouncing: null,
        MinDateBirthday: null,
        MaxDateBirthday: null,
        Popular: null,
        DateSort: null
    };
    var checkedAnn = 0;

    var jsonCategories = ApiService.GetCategories()
    
    .success(function (response) {
        $scope.Categories = response;
    })
    .error(function (fail) {
        console.log('fail load data with Service',fail);
    });
    $scope.GetAnnForCategories = function (category_id) {
        Filter.Category_id = category_id;
        ApiService.SaveCategoryFilter(category_id);
    }
}
SearchController.$inject = ['$scope', '$http', 'ApiService','localStorageService'];