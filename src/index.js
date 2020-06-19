import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); // es lo mismo que está arriba comentado. Solo se hace cuando se trata del mismo argumento que se trabaja en el foreach y en la funcion, sino no se puede hacer

const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);

todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();
console.log('todos', todoList.todos);