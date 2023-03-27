import React, { useState, useEffect } from 'react';

export default function Card() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  // set todo to localStorage
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  // get todo from localStorage
  useEffect(() => {
    JSON.parse(localStorage.getItem('todo'));
  }, []);

  // add new todo
  const handleTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput('')
  };

  // delete todo
  const handleDelete = (e) => {
    const delTodo = [...todo];
    delTodo.splice(e, 1);
    setTodo(delTodo);
  };

  // edit todo
  const handleEdit = e => {
    const editTodo = [...todo]
    setInput(editTodo[e])
  };

  return (
    <>
      <form className="grid" onSubmit={handleTodo}>
        <fieldset className="field">
          <legend className="legend">Input Todo</legend>
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type some.."
          />
        </fieldset>
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      <div className="w-full grid gap-2 mt-14">
        <span className="flex justify-between font-pop">
          <h3>Todo</h3>
          <h3>Action</h3>
        </span>

        {todo.map((todos, index) => {
          return (
            <span className="border-b border-mainBtn my-2 pb-2 flex justify-between" key={index}>
              <p className="col-span-2">{todos}</p>
              <div className="flex gap-2">
                <button
                  className="btn-red w-10 "
                  onClick={() => handleDelete(index)}
                  type="submit"
                >
                  del
                </button>
                <button className="btn-blue w-12" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </div>
            </span>
          );
        })}
      </div>
    </>
  );
}
