angular.module('miniRouting')
.controller('productsCtrl', function($scope, productService, $stateParams) {


if ($stateParams.id === 'shoes') {
  $scope.productData = productService.shoeData;
} else if ($stateParams.id === 'socks') {
  $scope.productData = productService.sockData;
}

})
