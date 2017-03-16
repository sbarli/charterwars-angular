angular.module('charterwars').factory('userDataFactory', userDataFactory);

function userDataFactory($http){
    return {
        registerUser: registerUser,
        loginUser: loginUser
    };
    
    function registerUser(user){
        return $http.post('/api/users/register', user).then(complete).catch(failed);
    }
    
    function loginUser(user){
        return $http.post('/api/users/login', user).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed(err){
        console.log(err.statusText);
    }
}