// blue - #5D5BD5, (93, 91, 213)
// red - #E65B49, (230, 91, 73)
// green - #77C961, (119, 201, 97)
// yellow - #F4E782, (224, 231, 130)

angular.module('charterwars').service('pageSectionColorService', pageSectionColorService);

function pageSectionColorService(){
    return {
        getIndexColors:getIndexColors
    };
    
    function getIndexColors(){
        var colors = ['#5D5BD5', '#E65B49', '#77C961', '#dbca4c'];
        
        return colors;
    }
}