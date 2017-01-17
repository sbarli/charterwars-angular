angular.module('charterwars').controller('IntroController', IntroController);

function IntroController($location){
    var vm = this;
    
    if($location.$$url === '/intro'){
        vm.showBtn = true;
    }else if ($location.$$url === '/home'){
        vm.showBtn = false;
    }
    
    vm.title = 'Intro Video';
}