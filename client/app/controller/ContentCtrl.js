
var ContentCtrl = function($scope,$location){

    $scope.logout = function(){
        $location.path('signIn')
    }

};
