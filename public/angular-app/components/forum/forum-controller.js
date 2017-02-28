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
    
    vm.post = function(page,sec){
        var pageId = page._id;
        var sectionId = sec._id;
        var responseData = {
            name: vm.name,
            answer: sec.answer
        };
        
        console.log('responseData', responseData);
        
        if(!sec.answer){
            sec.error = 'Please add an answer!';
        }else{
            pageDataFactory.postResponse(pageId, sectionId, responseData).then(function(response){
                console.log(response.status);
                if(response.status === 201){
                    sec.responded = true;
                }
            }).catch(function(err){
                console.log(err);
            });
        }
    };
}

// angular.module('charterwars').config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);