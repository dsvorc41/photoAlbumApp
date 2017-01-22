// Define the `phonecatApp` module
var photoAlbum = angular.module('photoAlbum', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
photoAlbum.controller('photoGalleryCtrl', function photoGalleryCtrl($scope) {
  $scope.photos = [
    {
      id: 'pic1',
      name: 'Awesome Image 1',
      url: 'assets/MockUp0.png',
      description: 'Some amazingly awesome photos \
                    from San Francisco',
      rating: 4.7
    },
    {
      id: 'pic2',
      name: 'Awesome Image 2',
      url: 'assets/MockUp1.png',
      description: 'Some amazingly awesome photos \
                    from San Francisco',
      rating: 4.7
    },
    {
      id: 'pic3',
      name: 'Awesome Image 3',
      url: 'assets/MockUp2.png',
      description: 'Some amazingly awesome photos \
                    from San Francisco',
      rating: 4.7
    },
    {
      id: 'pic4',
      name: 'Awesome Image 4',
      url: 'assets/MockUp3.png',
      description: 'Some amazingly awesome photos \
                    from San Francisco',
      rating: 4.7
    },
    {
      id: 'pic5',
      name: 'Awesome Image 5',
      url: 'assets/MockUp4.png',
      description: 'Some amazingly awesome photos \
                    from San Francisco',
      rating: 4.7
    },
  ];
});