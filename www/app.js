// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

var app = angular.module('app');

//Controller for the beads
app.controller('beadCtrl', function($scope, prayerData){

  $scope.decadeBead = function(data){
    $scope.credo = function(data){
      prayerData.setString ("I believe in God, the Father Almighty,"+
                            "Creator of heaven and earth. And in Jesus Christ, his only Son, our Lord:"+
                            " who was conceived by the Holy Spirit, born of the Virgin Mary," +
                            "suffered under Pontius Pilate, was crucified, died, and was buried;"+
                            " he descended into hell; the third day he rose again from the dead;"+
                            " he ascended into heaven; sitteth at the right hand of God the Father Almighty;"+
                            " from thence he shall come to judge the living and the dead." +
                            " I believe in the Holy Spirit, the holy Catholic Church, the communion of Saints," +
                            " the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.");
      console.log('The creed button clicked')
    };

    $scope.GloriaPatri = function(data){
      prayerData.setString("Glory be to the Father" +
                          " and to the Son, "+
                          "and to the Holy Spirit. "+
                          "as it was in the beginning, "+
                          "is now and ever shall be, "+
                          "world without end. Amen.")
    };

    prayerData.setString("Hail Mary full of Grace, the Lord be with you,\n" +
                          "blessed are you among women and blessed is the " +
                          "fruit of thy womb Jesus." +
                          "Holy Mary, mother of God, pray for us sinners"+
                          "now and at the hour of our death. Amen.\n" + data);
    console.log('decadeBead: ' + data + ' clicked')
    };

    $scope.paterNoster = function(data){
      prayerData.setString ("Our Father, Who art in heaven. " +
                            "Hallowed be Thy Name;"+
                            "Thy kingdom come," +
                            "Thy will be done," +
                            "on earth as it is in heaven. " +
                            "Give us this day our daily bread, " +
                            "and forgive us our trespasses, " +
                            "as we forgive those who trespass against us; " +
                            "and lead us not into temptation, " +
                            "but deliver us from evil. Amen.");
      prayerData.setDecadeNum(data + " decade.");
      console.log('decadeStart ' + data + ' clicked');
    };

  $scope.options ={
    direction: 'vertical',
    slidesPerView: '3',
    paginationClickable: true,
    showNavButtons: true,
  };
});

app.controller('cardCtrl', function($scope, prayerData){
      $scope.showPrayer = prayerData.getString;
      $scope.showDecadeNum = prayerData.getDecadeNum;
})

app.service('prayerData', function() {
  var showPrayer = 'The Holy Rosary';
  var showDecadeNum = ' ';

  return {
    getString: function(){
      return showPrayer;
    },

    setString: function(data){
      showPrayer = data;
    },

    getDecadeNum: function(){
      return showDecadeNum;
    },

    setDecadeNum: function(data){
      showDecadeNum = data;
    }
  }
})

/*controller for submitting data for prayer by user*/
app.controller('prayerPop', function($scope, $ionicPopup){
  $scope.showConfirm = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Send Prayer',
      template: 'Are you sure to send this intention?'
    });

    confirmPopup.then(function(res){
      if(res){
        console.log('Yes');
      } else {
        console.log('No');
      }
    });
  }
})

//controller for device vibration
app.controller('deviceSettings', function($scope){

})
