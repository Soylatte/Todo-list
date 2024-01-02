import React from "react";
import './TodoListTemplate.css';

const TodoListTemplate = ({form,children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                Today's TodoList

            </div>
            <section className="from-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                { children }
            </section>

        </main>

    )
}

export default TodoListTemplate;