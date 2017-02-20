angular.module('charterwars').controller('IntroController', IntroController);

function IntroController($location, $scope){
    var vm = this;
    
    if($location.$$url === '/intro'){
        $scope.showNavigation(false);
        vm.showContBtn = true;
    }else if ($location.$$url === '/home'){
        vm.showCloseBtn = true;
    }
    
    vm.title = 'Intro Video';
}