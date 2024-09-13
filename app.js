// app.js
angular.module('lunchApp', [])
    .controller('LunchController', ['$scope', function($scope) {
        $scope.lunchItems = "";
        $scope.resultMessage = "";

        $scope.checkIfTooMuch = function() {
            var itemsArray = $scope.lunchItems.split(',');
            itemsArray = itemsArray.map(item => item.trim()).filter(item => item.length > 0);
             if (itemsArray.length == 0)
             {
               $scope.resultMessage = "Please enter data first";
             }
             else
           {
            if (itemsArray.length <= 3) {
                $scope.resultMessage = "Enjoy!";
            } else {
                $scope.resultMessage = "Too much!";
            }
          }
        };
    }]);
