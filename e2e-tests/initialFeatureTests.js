// 'use strict';

// /* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('todo app', function() {

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To Do Challenge');
  });

});

describe('homepage of todo Challenge', function() {
  it('be able to add a todo', function() {
    browser.get('http://localhost:8080');

    element(by.model(todoappCtrl.todoTask)).taskInput.sendKeys('This is my frist task');
    element(by.css(submitTask)).click();
    var todoItems = element.all(by.repeater('item in todoappCtrl.todos'));

    expect(todoItems.count()).toEqual(2);
    // expect(todoItems.get(0).getText()).toEqual('This is my frist task');



    // expect().toEqual();
  });
});