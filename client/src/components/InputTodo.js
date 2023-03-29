import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  // Submit todo function
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            aria-label="todo"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        <button className={"btn btn-success " + (description.length > 0 ? '': "disabled")}>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
