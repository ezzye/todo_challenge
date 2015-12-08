describe('todoappController', function() {
  beforeEach(module('todoapp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoappController');
  }));


  var todos = [
    {
      "todo": "Yet another task",
      "done": false
    },
    {
      "todo": "One more task",
      "done": true
    }
  ];

  var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "/todoItems.json")
      .respond(
        todos
      );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
   });


  it('controller should return todo items', function() {
    httpBackend.flush();
    expect(ctrl.todos).toEqual(todos);
  });



});