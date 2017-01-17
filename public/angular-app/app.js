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
            }
        })
        .when('/intro', {
            templateUrl: 'angular-app/components/intro/intro.html', 
            controller: IntroController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/home', {
            templateUrl: 'angular-app/components/main/main.html',
            controller: MainController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/city', {
            templateUrl: 'angular-app/components/city/city.html', 
            controller: CityController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/city/transition', {
            templateUrl: 'angular-app/components/city/city-transition.html', 
            access: {
                restricted: false
            }
        })
        .when('/debate', {
            templateUrl: 'angular-app/components/debate/debate.html', 
            controller: DebateController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/debate/transition', {
            templateUrl: 'angular-app/components/debate/debate-transition.html', 
            controller: DebateController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/forum', {
            templateUrl: 'angular-app/components/forum/forum.html', 
            controller: ContentController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/credits', {
            templateUrl: 'angular-app/components/credits/credits.html', 
            access: {
                restricted: false
            }
        })
        .when('/register', {
            templateUrl: 'angular-app/components/register/register.html',
            // controller: RegisterController,
            // controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/profile', {
            templateUrl: 'angular-app/components/profile/profile.html',
            access: {
                restricted: true
            }
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