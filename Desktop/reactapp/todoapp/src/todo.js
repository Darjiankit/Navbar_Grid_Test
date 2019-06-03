import React from "react"

const Todos = ({ todoapp, deletetodo }) => {
    const Todoslist = todoapp.length ? (
        todoapp.map(todoappdata => {

            return (

                <div key={todoappdata.id} className="collection-item">
                    <span onClick={() => { deletetodo(todoappdata.id) }}>Content : {todoappdata.content} </span>
                </div>
            )
        })
    ) : (
            <p className="center">You have no todos </p>
        )
    return (
        <div className="todos collection">
            <span>{Todoslist}</span>
        </div>
    )
}
export default Todos