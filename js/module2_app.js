(function () {
  'use strict'

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {

    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
    toBuyList.message = "";
    toBuyList.name = "";
    toBuyList.quantity = "";
    toBuyList.bought = function (itemIndex){
      console.log("item value",toBuyList.items[itemIndex]);
      AlreadyBoughtController.items = ShoppingListCheckOffService.addItem(toBuyList.items[itemIndex].name, toBuyList.items[itemIndex].quantity);
      ShoppingListCheckOffService.removeItem(itemIndex);
      if(toBuyList.items.length === 0){
        toBuyList.message = "Every Thing Is Bought..!"
      }
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var alreadyBought = this;
     //alreadyBought.message = "Nothing Bought Yet..!";
     alreadyBought.message = "";
    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    console.log("already bought items length :  ",alreadyBought.items.length);
    if(alreadyBought.items.length === 0){
      alreadyBought.message = "Nothing Bought Yet..!"
    }else {
      already.message = "";
    }
  }

  function ShoppingListCheckOffService() {

    var service = this;

    service.toBuy =[
      {
        name : "Donuts",
        quantity : 5
    },
    {
        name : "Cookies",
        quantity : 10
    },
    {
        name : "Chocolates",
        quantity : 15
    },
    {
        name : "Peanut Butter",
        quantity : 10
    },
    {
        name : "Pepto Bismol",
        quantity : 16
    }
    ];

    service.getToBuyItems = function () {
      return service.toBuy;
    };

    service.bought = [];

    service.getBoughtItems = function () {
      return service.bought;
    };
    service.removeItem = function (itemIndex) {
      service.toBuy.splice(itemIndex,1);
    };
    service.addItem = function (name, quantity) {
      var item = {
        name: name,
        quantity: quantity
      };
      service.bought.push(item);
      console.log("after adding a item : ",service.bought.length);
      return service.bought;
    };

  }
})();
