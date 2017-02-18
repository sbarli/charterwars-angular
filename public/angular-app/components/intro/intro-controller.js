angular.module('charterwars').controller('IntroController', IntroController);

function IntroController($location, $scope){
    $scope.showNavigation(false);
    var vm = this;
    
    if($location.$$url === '/intro'){
        vm.showContBtn = true;
    }else if ($location.$$url === '/home'){
        vm.showCloseBtn = true;
    }
    
    vm.title = 'Intro Video';
}