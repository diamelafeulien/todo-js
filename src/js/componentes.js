import { Todo } from '../classes';
import { todoList } from '../index';

//Referencias al html
const dicTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    dicTodoList.append(div.firstElementChildChild);

    return div.firstElementChildChild;
}

//Eventos
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode == 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; //puede ser un input, label o button
    const todoElemento = event.target.parentElement.parentElement; // para obtener referencia a todo el elemento html <li> y su contenido
    const todId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) { // es porque se hizo click eb el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) { // si se hace click en el button X para eliminar
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento); // elimino la referencia del elemento html
    }
});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();

    // para eliminar todos los completados de abajo hacia arriba
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;

    if (!filtro) { return; }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));

    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');

        // para saber si el elmento de la lista está marcado como completado
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    // la clase hidden la personalizamos en el archivo css
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});