//app.service("ApiService", ['$http', function ($http) {
    //this.GetCategories = function () {
//    return $http.get("http://192.168.200.100/Searching.BE.Service//WCFRESTService.svc/GetCategories");
//Category_id, Country_id, City_id, Areas_id, Gender_user, DateAnnouncing, MinDateBirthday, MaxDateBirthday, Popular, DateSort
//Category_id: Category_id, Country_id: Country_id, City_id: City_id, Areas_id: Areas_id, Gender_user: Gender_user, DateAnnouncing: DateAnnouncing, MinDateBirthday: MinDateBirthday, MaxDateBirthday: MaxDateBirthday, Popular: Popular, DateSort: DateSort
var SaveFilter = {
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
var clearFilter = {
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

var ApiService = function ($http, localStorageService) {
    localStorageService.set('filter', SaveFilter);
    this.GetCategories = function () {
        return $http({
            url: 'http://192.168.100.101/api/WCFRESTService.svc/GetCategories',
            method: 'GET'
        });
    };

    this.ClearFilter = function () {
        console.log('Filter Clearing Success!');       
        SaveFilter.Category_id = 0;
        
    }

    this.SaveCategoryFilter = function (category_id) {
        SaveFilter.Category_id = category_id;
    };
    this.CategoryFilter = function () {
        console.log('output param:');
        console.log(SaveFilter.Category_id);
        return $http({
            url: 'http://localhost:14396/Search/GetAnnFilter',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { filter: SaveFilter }
        });
    };
    this.GetAnn = function () {
        return $http({
            url: 'http://192.168.100.101/api/WCFRESTService.svc/GetAnnouncing',
            method: 'GET'
        });
    };
}
ApiService.$inject = ['$http','localStorageService'];