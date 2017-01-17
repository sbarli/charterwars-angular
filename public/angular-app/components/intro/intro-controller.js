angular.module('charterwars').controller('IntroController', IntroController);

function IntroController($location){
    var vm = this;
    
    if($location.$$url === '/intro'){
        vm.showContBtn = true;
    }else if ($location.$$url === '/home'){
        vm.showCloseBtn = true;
    }
    
    vm.title = 'Intro Video';
}