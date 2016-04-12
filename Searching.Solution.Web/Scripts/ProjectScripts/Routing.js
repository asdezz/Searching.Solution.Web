
var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);
    $stateProvider
        .state('stateSearch', {
            url: '/Search',
            
            views: {
                "SearchContainer": {
                    templateUrl: '/Navigation/Search',
                    controller: SearchController
                },
                "AnnContainer@stateSearch": {
                    templateUrl: '/Search/AnnouncingList',
                    controller: AnnController
                }
            }
        })
        .state('home', {
            url: '/',
            templateUrl: 'Home/StartPage'
        })
        .state('stateProfile', {
            url: '/Profile',
            views: {
                "SearchContainer": {
                    templateUrl: '/Navigation/Profile'
                }
            }
        })
        .state('stateSearch.Announcing', {
            url: '/Announcing?categories_id',
            views: {
                "AnnContainer": {
                    templateUrl: function (param) { return '/Search/AnnouncingList?categories_id=' + param.categories_id; },
                    controller: AnnController
                }
                }
        })
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];
app.config(configFunction);
