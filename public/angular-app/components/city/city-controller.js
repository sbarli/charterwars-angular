angular.module('charterwars').controller('CityController', CityController);

function CityController($location, $timeout, anchorSmoothScroll, pageDataFactory, $filter, $route, $scope, pageSectionColorService){
    $scope.showNavigation(true);
    
    var vm = this;
    
    vm.pageDwnArrow = 'angular-app/assets/content-nav/city-down-outline.png';
    vm.pageUpArrow = 'angular-app/assets/content-nav/city-up-outline.png';
    vm.nextArrow = 'angular-app/assets/content-nav/city-next-arrow.png';
    
    vm.colors = pageSectionColorService.getIndexColors();
    
    pageDataFactory.pageList().then(function(response){
        var pages = response.data;
        vm.cityPage = ($filter('filter')(pages, {"name":"The City"}))[0];
        angular.forEach(vm.cityPage.sections, function(section, i){
            section.background = vm.colors[i];
        });
    });
    
    vm.goToVids = function (index){
        var next_idx;
        if(index === 'first'){
            next_idx = 0;
        }else{
            next_idx = index + 1;
        }
        var eID = 'city-vid-' + next_idx;
        anchorSmoothScroll.scrollTo(eID);
    };
    
    vm.backToTop = function (eID){
        anchorSmoothScroll.scrollTo(eID);
    };
    
    vm.post = function(section){
        var pageId = vm.cityPage._id;
        var sectionId = section._id;
        var responseData = {
            name: vm.name,
            answer: section.answer
        };
        
        console.log('responseData', responseData);
        
        if(!section.answer){
            section.error = 'Please add an answer!';
        }else{
            pageDataFactory.postResponse(pageId, sectionId, responseData).then(function(response){
                console.log(response.status);
                if(response.status === 201){
                    section.responded = true;
                }
            }).catch(function(err){
                console.log(err);
            });
        }
    };
    
}