import { rest } from "msw";

const todos = [
  {
    todo_id: 1,
    description: "Wash dishes",
  },
  {
    todo_id: 2,
    description: "Go shopping",
  },
  {
    todo_id: 3,
    description: "Take my wife to the workplace",
  },
  {
    todo_id: 4,
    description: "Have an dinner",
  },
];

export const handlers = [
    rest.get("http://localhost:4000/todos", (req, res, ctx) => {
        return res(ctx.json(todos));
      }),
    
      rest.get("http://localhost:4000/todos/:id", (req, res, ctx) => {
        //Extracting id from URL
        const id = req.params.id;
        //Getting todo from db (array)
        const todo = todos.find((todo) => todo.id === id);
    
        //Sending response
        if (todo) {
          return res(ctx.json(todo));
        } else {
          return res(ctx.json({ message: "todo not found" }));
        }
      }),
    
      rest.post("http://localhost:4000/todos", async (req, res, ctx) => {
        //Getting request body in json
        const todo = await req.json();

        //Assigning ID
        const id = todos.length + 1;
    
        //Adding todo to db (array)
        // todos.push(todo);
    
        //Sending response and setting status code
        return res(
          ctx.status(201),
          ctx.json({
            todo_id: id,
            description:todo.description,
          })
        );
      }),
    
      rest.delete("http://localhost:4000/todos/:id", (req, res, ctx) => {
        const id = req.params.id;
        const todoIndex = todos.findIndex((todo) => todo.id === id);
    
        //Removing todo from db (array)
        todos.splice(todoIndex, 1);
    
        return res(ctx.json({ message: "Deleted successfully" }));
      }),
    
      rest.patch("http://localhost:4000/todos/:id", async (req, res, ctx) => {
        const id = req.params.id;
        const reqBody = await req.json();
        const todo = todos.find((todo) => todo.id === id);
    
        //Updating todo
        todo.title = reqBody.title;
        todo.body = reqBody.body;
    
        //Sending response
        return res(ctx.json({ message: "Updated successfully" }));
      }),
    ];
