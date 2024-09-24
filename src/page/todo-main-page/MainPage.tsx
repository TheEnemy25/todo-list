import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { createTodo, deleteTodo, togglTodo } from "../../slices/toolkitSlice";
import { Link } from "react-router-dom";
import TrashIcon from "../../assets/TrashIcon";
import DoneIcon from "../../assets/DoneIcon";

const MainPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim() && description.trim()) {
      dispatch(createTodo({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  const unCompleteTodos = todos.filter((todo) => !todo.complete);
  const completeTodos = todos.filter((todo) => todo.complete);

  return (
    <main className="flex flex-col h-full pt-10 lg:px-40 lg:pt-40">
      <div>
        {/* <h1 className="text-5xl mb-10 pl-10 text-purple-500">Add your todos</h1> */}
        <div className="flex flex-col md:w-[500px] m-auto px-10 md:px-0">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Write Title"
            className="bg-black text-gray-500 mb-5 rounded-md py-2 px-5 border-solid outline outline-offset-2 outline-purple-500"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write Description"
            className="bg-black text-gray-500 mb-5 rounded-md py-2 px-5 border-solid outline outline-offset-2 outline-purple-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-purple-500 m-auto h-full rounded-lg py-2 px-5 text-white w-full"
            // w-1/3
          >
            Submit
          </button>
        </div>

        <div className="px-10">
          <h1 className="mt-10 text-purple-500 text-xl md:w-[500px] text-start m-auto">
            Tasks to do - {unCompleteTodos.length}
          </h1>
          <ul className="flex flex-col mt-5">
            {unCompleteTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex w-full justify-between mt-5 md:w-[500px] bg-stone-800 rounded-xl m-auto px-5 py-5"
              >
                <Link
                  to={`todos/${todo.id}`}
                  className="hover:text-purple-900 text-purple-500"
                >
                  {todo.title}
                </Link>
                <div className="flex flex-row">
                  <button
                    onClick={() => dispatch(togglTodo(todo.id))}
                    className="mr-3 flex"
                  >
                    <DoneIcon className="text-purple-500 hover:text-purple-900" />
                  </button>
                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="ml-5 flex"
                  >
                    <TrashIcon className="text-purple-500 hover:text-purple-900" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-10">
          <h1 className="mt-10 text-purple-500 text-xl md:w-[500px] text-start m-auto">
            Done - {completeTodos.length}
          </h1>
          <ul className="flex flex-col mt-5">
            {completeTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex w-full justify-between mt-5 md:w-[500px] bg-stone-800 rounded-xl m-auto px-5 py-5"
              >
                <Link
                  to={`todos/${todo.id}`}
                  className="line-through hover:text-purple-900 text-purple-500"
                >
                  {todo.title}
                </Link>
                <div className="flex flex-row">
                  <button
                    onClick={() => dispatch(togglTodo(todo.id))}
                    className="mr-3 flex"
                  >
                    <DoneIcon className="text-purple-500 hover:text-purple-900" />
                  </button>
                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="ml-5 flex"
                  >
                    <TrashIcon className="text-purple-500 hover:text-purple-900" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
