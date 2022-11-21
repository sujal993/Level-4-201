const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueLater, dueToday } = todoList();

var today = new Date();
let yesterday = new Date(new Date().setDate(today.getDate() - 1));
let tomorrow = new Date(new Date().setDate(today.getDate() + 1));

describe("TodoList test suite", () => {
  beforeAll(() => {
    add({
      title: "it's me sujal",
      completed: false,
      dueDate: yesterday.toLocaleDateString("en-CA"),
    });
    add({
      title: "i have good marks in math",
      completed: false,
      dueDate: tomorrow.toLocaleDateString("en-CA"),
    });
  });
  test("add new todo list", () => {
    const todoItemsCount = all.length;
    add({
      title: "it's my new test",
      completed: false,
      dueDate: today.toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("Should mark todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("relative all todo that are overdue", () => {
    const overdueCount = overdue().length;
    add({
        title:"i know some computer langueges",
        completed: false,
        dueDate: yesterday.toLocaleDateString("en-CA"),
      });
    expect(  overdue().length  ).toBe(overdueCount+1);
  });
  test("relative all todo that are duetoday", () => {
    const dueTodayCount = dueToday().length;
    add({
        title:"go to Leve submission Level4",
        completed: false,
        dueDate: today.toLocaleDateString("en-CA"),
      });
    expect(dueToday().length).toBe(dueTodayCount + 1);
  });
  test("relative all todo that are dueLater", () => {
    const dueLaterCounter = dueLater().length;
    add({
        title: " Done My own work",
        completed: false,
        dueDate: tomorrow.toLocaleDateString("en-CA"),
      });
    expect(dueLater().length).toBe(dueLaterCounter + 1);
  });
});
    