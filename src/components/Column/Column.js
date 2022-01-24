import React from "react";

import Task from "components/Task/Task";

import './Column.scss'

function Column() {
    return (
        <div className='column'>
          <header>Brainstorm</header>
          <Task />
          <footer>Add another card</footer>
        </div>
    )
}

export default Column