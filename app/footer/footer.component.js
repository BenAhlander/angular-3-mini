angular.module('fourWheels').component('footer', {
  templateUrl: 'app/footer/footer.template.html',
  controllerAs: 'footerCtrl',

  controller: function() {
    this.name = "";
    this.email = "";
    this.contacted = false;
    
    this.contact = function() {
      this.contacted = true;
      this.name = "WHY DID YOU CLICK ON THAT!?!?!?!?!?!?!?!";
      this.email = "Monkeys are rad";
    };
  },
});