import assert from "assert"
import { TodoStore } from "../src/js/TodoStore"

describe("TodoStore", () => {
  it("creates new todos", () => {
    const store = new TodoStore
    store.createTodo("todo1")
    store.createTodo("todo2")
    assert(store.todos.length === 2)
    assert(store.todos[0].value === "todo1")
    assert(store.todos[1].value === "todo2")
  })

  it("clears checked todos", () => {
    const store = new TodoStore
    store.createTodo("todo1")
    store.createTodo("todo2")
    store.createTodo("todo3")
    store.todos[1].complete = true;
    store.todos[2].complete = true;
    store.clearComplete()

    assert(store.todos.length === 1)
    assert(store.todos[0].value === "todo1")
  })
})
