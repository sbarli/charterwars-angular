angular.module('charterwars').filter('trustedSrcFilter', trustedSrcFilter);

function trustedSrcFilter($sce){
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}