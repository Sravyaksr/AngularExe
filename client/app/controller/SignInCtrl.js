var SignInCtrl = function($scope,$location){


    $scope.reset = function(){
        $scope.email = '';
        $scope.password = '';
    }

    $scope.signIn = function(){

        if( $scope.form.$valid ){
            alert('success');
        }else{
            $location.path('/content')
        }
    }

    $scope.register = function(){
        $location.path('/register')
    }
};
