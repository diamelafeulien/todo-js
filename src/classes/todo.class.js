export class Todo {

    // permite recuperar mis métodos que definí en la clase, desde el localstorage.
    static fromJson({ id, tarea, completado, creado }) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime(); //representacion actual de la hs min seg miliseg
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}