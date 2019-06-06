(function(){
    let app = angular.module('waComponents', []);

    app.controller('AppController',[
        '$scope', function($scope){
            $scope.items = [
                {ID: 1, Title: "Apple", Value: 10},
                {ID: 2, Title: "Banana", Value: 20},
                {ID: 3, Title: "Cherry", Value: 30}
            ];

            $scope.selectedItems = [
                {ID: 1, Title: "Apple", Value: 10},
                {ID: 2, Title: "Banana", Value: 20}
                ];

            $scope.showUserName = (item) => {
                console.log(item.Title);
                $scope.items = $scope.items.filter(x=>x.ID !== item.ID);
            }
        }
    ])

}());
