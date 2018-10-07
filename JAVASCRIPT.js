
//https://codepen.io/anon/pen/jeMQQm

var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.orderByField = 'name';
  $scope.reverseSort = false;
  
  $scope.data = {
    cars: [{
      name: 'Ford',
      make: 2012,
      picture:
          "http://www.hdcarwallpapers.com/walls/2012_ford_mustang_boss_4-wide.jpg",
      model: 'Mustang',
      availability: 'In Dealership'
    },{
      name: 'Kia',
      make: 2003,
      picture:
"http://zombdrive.com/images/2003-kia-optima-10.jpg",
      model: 'Optima',
      availability: 'Unavailable'
     },{
      name: 'Nissan',
      make: 2006,
             picture:
"https://static.cargurus.com/images/site/2012/09/20/11/14/2006_nissan_murano_se_awd-pic-4369345328390901849.jpeg",
      model: 'Murano',
      availability: 'Unavailable'
                },{
      name: 'Suzuki',
      make: 1999,
      picture:"https://img.chceauto.pl/suzuki/swift/suzuki_swift_hatchback_5-drzwiowy_405_1525_v1.jpg",
      model: 'Hatchback',
      availability: 'In Dealership'
      },{
      name: 'Benz',
      make: 1998,
      picture: "http://allgermancars.net/wp-content/uploads/parser/Mercedes-benz-E320-1998-5.jpg",
      model: 'E320',
      availability: 'In Dealership'
      },{
      name: 'Nissan',
      make: 2018,
                     picture:
"http://images.newcars.com/images/car-pictures/original/2018-Nissan-Altima-Sedan-2.5-S-4dr-Sedan-Photo-15.png",
      model: 'Altima',
      availability: 'Unavailable'
      },{
      name: 'Chevrolet',
      make: 2017,
      picture:"http://images.newcars.com/images/car-pictures/original/2017-Chevrolet-Equinox-SUV-L-Front-wheel-Drive-Exterior.png",
      model: 'Equinox',
      availability: 'Unavailable'
      },{
      name: 'Nissan',
      make: 2010,
        picture:
"http://st.motortrend.com/uploads/sites/10/2015/11/2010-nissan-rogue-sl-2wd-suv-angular-front.png",
      model: 'Rogue',
      availability: 'In Dealership'
      },{
      name: 'Benz',
      make: 2015,
      picture:"http://www.dieselstation.com/wallpapers/albums/Mercedes/GLA-Class-2015/Mercedes-Benz-GLA-Class-2015-widescreen-41.jpg",
      model: 'GLA',
      availability: 'In Dealership'
      },{
      name: 'Honda',
      make: 2015,
      picture: "http://images.newcars.com/images/car-pictures/original/2015-Honda-Civic-Coupe-Hatchback-LX-2dr-Coupe-Photo-19.png",
      model: 'Civic',
      availability: 'In Dealership'
    }]
  };
});
