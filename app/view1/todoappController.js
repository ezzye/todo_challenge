app.controller('todoappController',['$http',function ($http) {
  var self = this;
  var todos;


 $http.get('/todoItems.json').then(
      function(response) {
        self.todos = response.data;
      }
    );

self.addTodo = function() {
  self.newtodo = {
      "todo": self.todo,
      "done": false
    };
  self.todos.push(self.newtodo);
  self.todo = '';
};

self.removeTodo = function(item) {
  var index = self.todos.indexOf(item)
  self.todos.splice(index,1);
};

self.clearDoneTodos = function() {
  self.todos = self.todos.filter(function(item) {
    return !item.done
  });
}

}]);
