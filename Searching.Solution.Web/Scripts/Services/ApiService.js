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
            url: 'http://192.168.100.101/Searching/WCFRESTService.svc/GetCategories',
            method: 'GET'
        });
    };

    this.GetFilter = function () {
        return localStorageService.get('filter');
    };
    this.ClearFilter = function () {
        console.log('Filter Clearing Success!');       
        SaveFilter.Category_id = 0;
        localStorageService.set('filter', SaveFilter);
    }

    this.SaveCategoryFilter = function (category_id) {
        SaveFilter.Category_id = category_id;
        localStorageService.set('filter', SaveFilter);
    };
    this.CategoryFilter = function () {
        console.log('output param:');
        console.log(localStorageService.get('filter'));
        return $http({
            url: 'http://localhost:14396/Search/GetAnnFilter',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { filter: localStorageService.get('filter') }
        });
    };
    this.GetAnn = function () {
        return $http({
            url: 'http://192.168.100.101/Searching/WCFRESTService.svc/GetAnnouncing',
            method: 'GET'
        });
    }
}
ApiService.$inject = ['$http','localStorageService'];