describe('factory: LoadTodos', function() {

  var loadtodos;

  beforeEach(module('todoapp'));

  beforeEach(inject(function(LoadTodos) {
    loadtodos = LoadTodos;
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

});