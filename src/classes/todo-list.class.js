import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStrage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id); // me va a regresar un nuevo arreglo que no contenga el elemento que coincida con el id que llega commo parametro
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            console.log(id, todo.id);

            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStrage() {
        this.todos = (localStorage.detItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) : [];

        // this.todos = this.todos.map(obj => Todo.fromJson(obj)); // se lo puede plantear de la siguiente manera
        this.todos = this.todos.map(Todo.fromJson);

        // if (localStorage.detItem('todo')) {
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // } else {
        //     this.todos = [];
        // }
    }
}