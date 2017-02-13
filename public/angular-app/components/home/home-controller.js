angular.module('charterwars').controller('MainController', MainController);

function MainController($uibModal, $scope){
    $scope.showNavigation(true);
    
    var vm = this;
    vm.title = 'Home Page';
    
    vm.openModal = function(){
        var modalInstance = $uibModal.open({
            controller: IntroController,
            controllerAs: 'vm',
            templateUrl: 'angular-app/components/intro/intro.html',
            windowClass: 'home-intro-modal'
        });
        
        modalInstance.result.then(
            function handleResolve(response){
                console.log('modal closed');
            },
            function handleReject(err){
                console.log('error: ', err);
            }
        );
    };
}