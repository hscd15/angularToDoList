(function () {
    var app = angular.module('toDoList', []);
    
    app.controller('listController', function () {
        var list = this;
        list.items = [
            {
                string: 'wine',
                done: false
            },
            {
                string: 'cherry Tomateos',
                done: false
            },
            {
                string: 'salami',
                done: false
            }
        ];

        list.addItem = function () {
            list.items.push({
                string: list.itemInput,
                done: false
            });
            list.itemInput = '';
        };

        list.deleteItem = function (item) {
            list.items.splice(item, 1);
        };
   
    });
})();