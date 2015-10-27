
var RegisterCtrl = function($scope,$location){

    $scope.reset = function(){
        $scope.username = '';
        $scope.email = '';
        $scope.password = '';
        $scope.retypepassword = '';
    }

    $scope.reset();

    $scope.registerUser = function(){
        if( $scope.validate()){
            alert($scope.username + ' registered successful, please continue with sign in.');
            $location.path('signIn')
        }else{
            alert('Please correct fields and try again.');
        }

    }

    $scope.validate = function(){
        if( $scope.username == '' ){
            return false;
        }
        if( $scope.email == '' ){
            return false;
        }
        if( $scope.password == '' ){
            return false;
        }
        if( $scope.retypepassword == $scope.password ){
            return false;
        }

        return true;
    }
}
