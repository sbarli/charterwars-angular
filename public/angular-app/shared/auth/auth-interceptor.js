angular.module('charterwars').factory('AuthInterceptor', AuthInterceptor);

function AuthInterceptor($window, AuthFactory, $q, $location){
    return{
        request: request,
        response: response,
        responseError: responseError
    };
    
    function request(config){
        config.headers = config.headers || {};
        if($window.sessionStorage.token){
            config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
        }
        return config;
    }
    
    function response(response){
        if(response.status === 200 && $window.sessionStorage.token && !AuthFactory.isLoggedIn){
            AuthFactory.isLoggedIn = true;
        }
        if(response.status === 401){
            AuthFactory.isLoggedIn = false;
        }
        return response || $q.when(response);
    }
    
    function responseError(rejection){
        if(rejection.status === 401 || rejection.status === 403){
            delete $window.sessionStorage.token;
            AuthFactory.isLoggedIn = false;
            $location.path('/login');
        }
        return $q.reject(rejection);
    }
}