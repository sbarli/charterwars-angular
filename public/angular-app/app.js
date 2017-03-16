angular.module('charterwars', ['ngRoute', 'angular-jwt', 'ui.bootstrap']).config(config).run(run);
    
function config($routeProvider, $httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
    
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
            templateUrl: 'angular-app/components/main-content/city.html', 
            controller: ContentController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'city'
        })
        .when('/debate', {
            templateUrl: 'angular-app/components/main-content/debate.html', 
            controller: ContentController,
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
        .when('/video', {
            templateUrl: 'angular-app/components/videos/videos.html', 
            controller: VideosController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'video'
        })
        .when('/credits', {
            templateUrl: 'angular-app/components/credits/credits.html', 
            access: {
                restricted: false
            },
            activetab: 'credits'
        })
        .when('/login', {
            templateUrl: 'angular-app/components/login/login.html',
            controller: LoginController,
            controllerAs: 'vm',
            access: {
                restricted: false
            },
            activetab: 'register'
        })
        .otherwise({
            redirectTo: '/'
        });
}

function run($rootScope, $location, $window, AuthFactory){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
        if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn){
            console.log('prevent path');
            event.preventDefault();
            $location.path('/login');
        }
    });
}