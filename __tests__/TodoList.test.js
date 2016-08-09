import assert from "assert"
import { shallow } from 'enzyme'
import React from "react"

import TodoList from "../src/js/TodoList"
import { TodoStore } from "../src/js/TodoStore"

describe("TodoList", () => {

  it("renders new todos", () => {
    const store = new TodoStore

    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")

    assert.equal(
      shallow(<TodoList store={store} />).find("li").length,
      3
    )
  })

  it("renders correct todos", () => {
    const store = new TodoStore

    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")

    const wrapper =shallow(<TodoList store={store} />);

    assert.equal(
      wrapper.find("li span").at(0).text(),
      "todo1"
    )
    assert.equal(
      wrapper.find("li span").at(1).text(),
      "todo2"
    )
    assert.equal(
      wrapper.find("li span").at(2).text(),
      "todo3"
    )
  })

  it("filters todos", () => {
    const store = new TodoStore

    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")
    store.filter = "2"

    const wrapper = shallow(<TodoList store={store} />);

    assert.equal(
      wrapper.find("li").length,
      1
    )

    assert.equal(
      wrapper.find("li span").at(0).text(),
      "todo2"
    )
  })

  it("clears checked todos", () => {
    const store = new TodoStore

    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")
    store.todos[0].complete = true
    store.todos[1].complete = true

    const wrapper = shallow(<TodoList store={store} />)

    wrapper.find("a").simulate("click")

    assert.equal(
      wrapper.find("li").length,
      1
    )

    assert.equal(
      wrapper.find("li span").at(0).text(),
      "todo3"
    )
  })


})
