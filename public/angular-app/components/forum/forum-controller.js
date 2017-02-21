angular.module('charterwars').controller('ForumController', ForumController);

function ForumController($scope, $q, pageDataFactory, pageSectionColorService){
    $scope.showNavigation(true);
    
    var vm = this;
    
    vm.title = 'Discussion Page';
    
    pageDataFactory.responseList().then(function(resp){
        vm.pages = resp.data;
        console.log('pages', vm.pages);
        var colors = pageSectionColorService.getIndexColors();
        angular.forEach(vm.pages, function(page){
            angular.forEach(page.sections, function(section, i){
                section.background = colors[i];
            });
        });
    });
}

// angular.module('charterwars').config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);