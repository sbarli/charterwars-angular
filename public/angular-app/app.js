angular.module('charterwars', ['ngRoute', 'angular-jwt', 'ui.bootstrap']).config(config); //.run(run)
    
function config($routeProvider, $httpProvider){
    // $httpProvider.interceptors.push('AuthInterceptor');
    
    $routeProvider
        .when('/', {
            templateUrl: 'angular-app/components/cover/cover.html',
            controller: CoverController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'cover'
        })
        .when('/intro', {
            templateUrl: 'angular-app/components/intro/intro.html', 
            controller: IntroController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'intro'
        })
        .when('/home', {
            templateUrl: 'angular-app/components/home/home.html',
            controller: MainController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'home'
        })
        .when('/city', {
            templateUrl: 'angular-app/components/city/city.html', 
            controller: CityController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'city'
        })
        .when('/debate', {
            templateUrl: 'angular-app/components/debate/debate.html', 
            controller: DebateController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'debate'
        })
        .when('/forum', {
            templateUrl: 'angular-app/components/forum/forum.html', 
            controller: ForumController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'forum'
        })
        .when('/credits', {
            templateUrl: 'angular-app/components/credits/credits.html', 
            access: {
                restricted: false
            },
            activetab: 'credits'
        })
        .when('/register', {
            templateUrl: 'angular-app/components/register/register.html',
            // controller: RegisterController,
            // controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'register'
        })
        .when('/profile', {
            templateUrl: 'angular-app/components/profile/profile.html',
            access: {
                restricted: true
            },
            activetab: 'profile'
        })
        .otherwise({
            redirectTo: '/home'
        });
}

// function run($rootScope, $location, $window, AuthFactory){
//     $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
//         if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn){
//             console.log('prevent path');
//             event.preventDefault();
//             $location.path('/');
//         }
//     });
// }